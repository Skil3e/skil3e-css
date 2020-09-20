export const copyToClipboard = str => {
    const { clipboard } = window.navigator;

    if (!clipboard || typeof clipboard.writeText !== `function`) {
        const textarea = document.createElement(`textarea`);
        textarea.value = str;
        textarea.setAttribute(`readonly`, "true");
        textarea.setAttribute(`contenteditable`, "true");
        textarea.style.position = `absolute`;
        textarea.style.left = `-9999px`;
        document.body.appendChild(textarea);
        textarea.select();
        const range = document.createRange();
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        textarea.setSelectionRange(0, textarea.value.length);
        document.execCommand(`copy`);
        document.body.removeChild(textarea);

        return Promise.resolve(true);
    }

    return clipboard.writeText(str);
};

export function toSlug(string) {
    return string
        .toString() // Cast to string
        .toLowerCase() // Convert the string to lowercase letters
        .trim() // Remove whitespace from both sides of a string
        .replace(/\s/g, '-') // Replace each space with -
        .replace(
            /[^\w\-\u00b4\u00C0-\u00C3\u00c7\u00C9-\u00CA\u00CD\u00D3-\u00D5\u00DA\u00E0-\u00E3\u00E7\u00E9-\u00EA\u00ED\u00F3-\u00F5\u00FA]+/g,
            '',
        ); // Removes all chars that aren't words, -, ´ or some latin characters (À Á Â Ã Ç É Ê Í Ó Ô Õ Ú à á â ã ç é ê í ó ô õ ú)
}