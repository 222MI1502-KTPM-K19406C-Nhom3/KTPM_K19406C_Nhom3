const characters = 'abcdefghijklmnopqrstuvwxyz';

module.exports = {
    randomNumber: function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
    randomString: function generateString(length) {
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
