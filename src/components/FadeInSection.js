// src/components/FadeInSection.js (קוד משוער)

import React, { useState, useEffect, useRef } from 'react';

// הגדרת הקלאסים שמעוררים את האנימציה
const ANIMATE_CLASS = 'is-visible';
const INITIAL_CLASS = 'fade-in-section'; // הקלאס שמעניק את ה-opacity: 0

export default function FadeInSection({ children, ...props }) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // 🛑 השינוי הקריטי מתבצע כאן:
                // אנחנו מעדכנים את ה-state גם אם הרכיב יוצא מהתצוגה
                setIsVisible(entry.isIntersecting); 
            });
        }, {
            // ה-threshold קובע כמה אחוזים מהרכיב צריכים להיראות כדי לעורר את האירוע
            // 0.1: 10% גלוי
            threshold: 0.1 
        });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            className={`${INITIAL_CLASS} ${isVisible ? ANIMATE_CLASS : ''}`}
            ref={domRef}
            {...props}
        >
            {children}
        </div>
    );
}