function getWorkoutSuggestion(timeStr) {
  const [time, meridian] = timeStr.split(' ');
  let [h, m] = time.split(':').map(Number);
  h = meridian === 'PM' && h !== 12 ? h + 12 : meridian === 'AM' && h === 12 ? 0 : h;
  const totalMin = h * 60 + m;

  if (totalMin > 300 && totalMin <= 540) return 'cardio session';
  if (totalMin > 540 && totalMin <= 720) return 'strength training';
  if (totalMin > 720 && totalMin <= 1020) return 'yoga and flexibility';
  if (totalMin > 1020 && totalMin <= 1200) return 'high-intensity interval training';
  return 'light stretching and cool down';
}

console.log(getWorkoutSuggestion("06:30 AM"));  
 console.log(getWorkoutSuggestion("10:15 AM"));  
console.log(getWorkoutSuggestion("03:00 PM"));  
console.log(getWorkoutSuggestion("05:45 PM"));  
console.log(getWorkoutSuggestion("09:10 PM"));   
 

 