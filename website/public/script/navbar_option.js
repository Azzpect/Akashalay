function rotate(element) {
    let arrow = element.childNodes[1]
    let angle = getRotation(arrow)
    arrow.style.transform = `rotate(${angle + 180}deg)`
    let option_list = element.childNodes[0].innerHTML.toLowerCase()
    getRotation(arrow)
    document.querySelector(`.${option_list}-options`).classList.toggle('show-options')
}
function getRotation(element) {
    let st = window.getComputedStyle(element, null)
    let tr = st.getPropertyValue('-webkit-transform') ||
            st.getPropertyValue('-moz-transform') ||
            st.getPropertyValue('-ms-transform') ||
            st.getPropertyValue('-o-transform') ||
            st.getPropertyValue('transform') ||
            null
    if(tr) {
        let values = tr.split('(')[1].split(')')[0].split(',')
        let cosX = values[0]
        let sinX = values[1]
        let angle = Math.round(Math.atan2(sinX, cosX) * (180/Math.PI))
        return angle
    }
}