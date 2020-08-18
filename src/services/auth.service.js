import axios from 'axios';

const logout = () => {
    localStorage.removeItem('user');
};
const userJson = JSON.parse(localStorage.getItem('user'));

if (localStorage.getItem('user') === 'undefined') {
    logout();
} else if (userJson && !userJson.data) {
    logout();
}

const login = (email, password) => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const options = {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        data: formData,
        url: `${process.env.REACT_APP_API_URL}/api/login`,
    };

    return axios(options).then(user => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    });
};

const registration = user => {
    const formData = new FormData();
    const { country, email, password } = user;
    formData.append('country', country);
    formData.append('email', email);
    formData.append('password', password);

    const options = {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        data: formData,
        url: `${process.env.REACT_APP_API_URL}/api/registration`,
    };

    return axios(options).then(data => data);
};

export { login, registration, logout };
