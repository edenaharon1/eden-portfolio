// src/hooks/useOnScreen.js

import { useState, useEffect, useRef } from 'react';

// Hook זה מזהה מתי רכיב נכנס או יוצא מהמסך
export default function useOnScreen(options) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // אם האלמנט נראה (entry.isIntersecting הוא true)
      // אנחנו מעדכנים את ה-state.
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    // ניקוי: חשוב לנקות את ה-Observer כשמפרקים את הרכיב
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]); // ה-Hook יופעל מחדש אם ה-options משתנים

  // מחזיר את ה-reference של האלמנט ואת ה-state שלו
  return [ref, isVisible];
}