export default function () {
    // ищем в определенном месте dom название активной темы и возвращаем
    return typeof window !== "undefined" ? document.body.getAttribute('th-name') : ''
}