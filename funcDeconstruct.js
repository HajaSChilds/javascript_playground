const User = {

    firstName : 'Mae',
    lastName : 'West',
    middleName: 'A'
}

const renderUser = ({firstName, middleName, lastName}) =>
{
    console.log(`Hello ${firstName} ${middleName} ${lastName}!!`)
}

renderUser(User)