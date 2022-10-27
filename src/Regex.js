const Regex = {

    email: (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    },
    password6: (password) => {
        return String(password).match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/);
    }
};
export default Regex;