module.exports = (string) => {

    string = string.trim().toLowerCase();
    string = string.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
    string = string.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
    string = string.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
    string = string.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
    string = string.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
    string = string.replace(new RegExp('[Ç]', 'gi'), 'c');
    return string;

}