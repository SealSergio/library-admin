export const getCurrentMode = (): string | null => {
    const currentMode = localStorage.getItem('color-mode');
    console.log("currentMode: ", currentMode);

    return currentMode;
}

export const setNewMode = (): void => {
    localStorage.setItem(
        'color-mode',
        (getCurrentMode() === 'dark-mode' ? 'light-mode' : 'dark-mode')
    );

    document.documentElement.classList.toggle('dark-mode');
}
