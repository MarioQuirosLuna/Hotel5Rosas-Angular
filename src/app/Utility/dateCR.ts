export function dateCR(): string {
    const now = new Date();
    const costaRicaTimezoneOffset = -360; // Costa Rica is -6 hours behind UTC
    const costaRicaTime = new Date(now.getTime() + costaRicaTimezoneOffset * 60 * 1000);

    const formattedDate = costaRicaTime.toISOString().slice(0, 10);

    // formattedDate now contains a string formatted as "yyyy-mm-dd"

    return formattedDate;
}
