{
    function updateClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份从0开始，所以需要加1
            const day = String(now.getDate()).padStart(2, '0');

            const formattedTime = `${hours}:${minutes}:${seconds}`;
            const formattedDate = `${year}-${month}-${day}`;

            document.getElementById('clock').textContent = `时间: ${formattedTime} 日期: ${formattedDate}`;
        }
        setInterval(updateClock, 1000);
        updateClock();
}