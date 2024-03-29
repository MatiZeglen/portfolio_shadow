const preview = document.getElementById("preview"),
    styles = document.getElementById("styles"),
    ranges = document.querySelectorAll(".settings input"),
    copyButton = document.getElementById("copy-styles");

ranges.forEach((slider) => {
    slider.addEventListener("input", generateStyles);
});

function generateStyles() {
    const xShadow = document.getElementById("x-shadow").value;
    const yShadow = document.getElementById("y-shadow").value;
    const blurRadius = document.getElementById("blur-r").value;
    const spreadRadius = document.getElementById("spread-r").value;
    const shadowColor = document.getElementById("shadow-color").value;
    const shadowOpacity = document.getElementById("shadow-opacity").value;
    const shadowInset = document.getElementById("inset-shadow").checked;
    const borderRadius = document.getElementById("border-r").value;

    const boxShadow = `${shadowInset ? "inset " : ""} ${xShadow}px ${yShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor, shadowOpacity)}`;

    preview.style.boxShadow = boxShadow;
    preview.style.borderRadius = `${borderRadius}px`;

    styles.textContent = `box-shadow: ${boxShadow};\nborder-radius: ${borderRadius}px;`;

}

function hexToRgba(shadowColor, shadowOpacity) {
    const r = parseInt(shadowColor.substr(1, 2), 16);
    const g = parseInt(shadowColor.substr(3, 2), 16);
    const b = parseInt(shadowColor.substr(5, 2), 16);

    return `rgba(${r}, ${g}, ${b}, ${shadowOpacity})`;
}



function copyStyles() {
    styles.select();
    document.execCommand("copy");
    copyButton.innerText = "Copied!";
    setTimeout(() => {
        copyButton.innerText = "Copy Styles";
    }, 500);
}
generateStyles();

const preview2 = document.getElementById("preview2"),
    styles2 = document.getElementById("styles2"),
    ranges2 = document.querySelectorAll(".settings2 input"),
    copyButton2 = document.getElementById("copy-styles2");

ranges2.forEach((slider2) => {
    slider2.addEventListener("input", generateStyles2);
});

function generateStyles2() {
    const xShadow2 = document.getElementById("x-shadow2").value;
    const yShadow2 = document.getElementById("y-shadow2").value;
    const blurRadius2 = document.getElementById("blur-r2").value;
    const shadowColor2 = document.getElementById("shadow-color2").value;
    const shadowOpacity2 = document.getElementById("shadow-opacity2").value;

    const textShadow = `${xShadow2}px ${yShadow2}px ${blurRadius2}px ${hexToRgba2(shadowColor2, shadowOpacity2)}`;

    preview2.style.textShadow = textShadow;
    styles2.textContent = `text-shadow: ${textShadow};`;
}
function hexToRgba2(shadowColor2, shadowOpacity2) {
    const r2 = parseInt(shadowColor2.substr(1, 2), 16);
    const g2 = parseInt(shadowColor2.substr(3, 2), 16);
    const b2 = parseInt(shadowColor2.substr(5, 2), 16);

    return `rgba(${r2}, ${g2}, ${b2}, ${shadowOpacity2})`;
}
function copyStyles2() {
    styles2.select();
    document.execCommand("copy");
    copyButton2.innerText = "Copied!";
    setTimeout(() => {
        copyButton2.innerText = "Copy Styles";
    }, 500);
}

generateStyles2();