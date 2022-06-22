const data = JSON.parse(localStorage.getItem('data'));
const { name_, age, email, phoneno, gender, sunday, monday, tuesday, wendesday, thurday, friday, saturday } = data;
// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');
// let email = localStorage.getItem('email');
// let phone = localStorage.getItem('phone');
// let gender = localStorage.getItem('gender');
// let sunday = localStorage.getItem('sunday');
// let monday = localStorage.getItem('monday');
// let tuesday = localStorage.getItem('tuesday');
// let wednesday = localStorage.getItem('wednesday');
// let thrusday = localStorage.getItem('thrusday');
// let friday = localStorage.getItem('friday');
// let saturday = localStorage.getItem('saturday');
$('#table #displaydata').append('<tr class="child"></td><td>' + name_ + '</td><td>' + age + '</td><td>' + email + '</td><td>'
    + phoneno + '</td><td>' + gender + '</td><td>' + sunday + '</td><td>' + monday + '</td><td>' + tuesday + '</td><td>' + wendesday + '</td><td>'
    + thurday + '</td><td>' + friday + '</td><td>' + saturday + '</td></tr>'


)
