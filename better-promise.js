const login = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('User logged in...');
        }, 2000);
    })
}

const updateAccount = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Updating last login...');
        }, 3000);
    });
}

async function loginActivities() {

    const returnedUpdateAccount = await updateAccount();
    console.log(returnedUpdateAccount);

    const returnedLogin = await login();
    console.log(returnedLogin);

}

loginActivities();