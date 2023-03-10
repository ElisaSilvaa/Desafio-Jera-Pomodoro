    const circularProgressbar = document.querySelector("#circularProgressBar");
    const circularProgressBarNumber = document.querySelector("#circularProgressBar .progress-value");
    const buttonTypePomodoro = document.querySelector("#buttonTypePomodoro");
    const buttonTypeShortBreak = document.querySelector("#buttonTypeShortBreak");

    const audio = new Audio('BIP.mp3');

    const pomodorotimerInSeconds = 1500;
    const shortBreakTimerInSeconds = 100;
    const TIMER_TYPE_POMODORO = 'POMODORO';
    const TIMER_TYPE_SHORT_BREAK = 'SHORTBREAK';

    let progressInterval;
    let pomodoroType = TIMER_TYPE_POMODORO;
    let timerValue = pomodorotimerInSeconds;
    let multiplierFactor = 360 / timerValue;


    function formatNumberInStringMinute(number) {
        const minutes = Math.trunc(number / 60)
            .toString()
            .padStart(2, '0');
        const seconds = Math.trunc(number % 60)
            .toString()
            .padStart(2, '0');
        return `${minutes}:${seconds}`;
    }

    const startTimer = () => {
        progressInterval = setInterval(() => {
            timerValue--;
            setInfoCircularProgressBar();
        }, 1000);
    }