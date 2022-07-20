$(document).ready(function () {
  $('#myform').validate({
    
    rules: {
      name: {
        required: true,
        minlength: 3,
        maxlength:30,
        name_val: true
      },
      age : {
        required:true,
        min:18,
        max:25,
        age_val:true
      },
      email: {
        required: true,
        email1:true
      },
      phone: {
        required: true,
        phone_val:true,
        minlength:10,
        maxlength:10
      },
      gender: {
        required: true
      },
      pickupTime1 :{

        fun1 : true
      },
      pickupTime2 :{
        fun2 : true
      },
      pickupTime3 :{
        fun3 : true
      },
      pickupTime4 :{
        fun4 : true
      },
      pickupTime5 :{
        fun5 : true
      },
      
      pickupTime6 :{
        fun6 : true
      },
      pickupTime7 :{
        fun7 : true
      },
      nextday:{
        required:true
      }
      
      
      
    },
    errorPlacement: function (error, element) {
      if (element.is(":radio")) {
        error.insertAfter("#other1");
      }
      else if (element.attr("name")=='nextday'){
        error.insertAfter("#nextday2")
      }
      else { // This is the default behavior of the script for all fields
        error.insertAfter(element);
      }
    },
    

  })
  
  $.validator.addMethod('name_val',function(value){
    return /^[a-zA-Z]+(\s{0,1}[a-zA-Z]\s{0,1})*$/.test(value);
  }, "Please enter a valid name");

  $.validator.addMethod('age_val',function(value){
    return /^[0-9]*$/.test(value);
  }, "Please enter a valid age");

  $.validator.addMethod('email1',function(value){
    return  /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@tntra([\.])io/.test(value);
  }, "Please enter a valid Email address");
  $.validator.addMethod('phone_val',function(value){
    return /[7-9]{1}[0-9]{9}$/.test(value); 
  }, 'Please enter a valid phone number');



  $.validator.addMethod('fun1',function(value){
    // event.preventDefault();
    return $('#sunday').val()=='on' && $('#pickupTime1').val() != ' ';
}, 'Please enter Pick up time');
$.validator.addMethod('fun2',function(value){
  // event.preventDefault();
  return $('#monday').val() == 'on' && $('#pickupTime2').val() != ' ';
}, 'Please enter Pick up time');
$.validator.addMethod('fun3',function(value){
  // event.preventDefault();
  return $('#tuesday').val() == 'on' && $('#pickupTime3').val() != ' ';
}, 'Please enter Pick up time');
$.validator.addMethod('fun4',function(value){
  // event.preventDefault();
  return $('#wednesday').val() == 'on' && $('#pickupTime4').val() != ' ';
}, 'Please enter Pick up time');
$.validator.addMethod('fun5',function(value){
  // event.preventDefault();
  return $('#thrusday').val() == 'on' && $('#pickupTime5').val() != ' ';
}, 'Please enter Pick up time');
$.validator.addMethod('fun6',function(value){
  // event.preventDefault();
  return $('#friday').val() == 'on' && $('#pickupTime6').val() != ' ';
}, 'Please enter Pick up time');
$.validator.addMethod('fun7',function(value){
  // event.preventDefault();
  return $('#saturday').val() == 'on' && $('#pickupTime7').val() != ' ';
}, 'Please enter Pick up time');
$.validator.addMethod('nextday_val',function(value){
  // event.preventDefault();
  if ($('#nextday').checked == true ){
      return false;
  }
});
  
$(document).on('click', '#nextday2 input[type=checkbox]', function (event) {
  if ($(this).is(':checked')) {
    $('.day input[type=checkbox]').attr('disabled', false).prop('checked', false)

  }
  else {
    $('.day input[type=checkbox]').attr('disabled', true).prop('checked', false).parent().parent().siblings('.time').children().attr('disabled', true).closest('div.time').find('select').val(" ");
  }
});
// for all days checkbox disable /enable
$(document).on('click', '.day input[type=checkbox]', function (event) {
  if ($(this).is(':checked')) {
    console.log($(this).parent().parent().siblings().children());
    $(this).parent().parent().siblings('.time').children().attr('disabled', false).closest('div.time').find('select').val(" ");

  }
  else {
    // $(this).siblings('.time').closest('select').attr('disabled',true);
    $(this).parent().parent().siblings('.time').children().attr('disabled', true).closest('div.time').find('select').val(" ");
  }
});
//for error hide if next day check box is disable
$(document).on('click', '#nextday2 input[type=checkbox]', function (event) {
  if (!$(this).is(':checked')) {
    $('.day input[type=checkbox]').attr('disabled', true).prop('checked', false).parent().parent().siblings('.time').children().attr('disabled', true).closest('div.time').children(".error").closest("label").hide();

  }
});
//for error hide if days are disable
$(document).on('click', '.day input[type=checkbox]', function (event) {
  if (!$(this).is(':checked')) {
    console.log($(this).parent().parent().siblings().children());
    $(this).parent().parent().siblings('.time').children().attr('disabled', true).closest('div.time').children(".error").closest("label").hide();

  }

});



   
})


 
$("#myform").submit(function (event) {
  event.preventDefault();
  localStorage.clear();
  if($('.day input[type=checkbox]').is(':checked')){
    var flag=true;
  }
  else{
    var flag=false;
  }
  for (let i = 1; i < 8; i++) {
    if ($('#pickupTime' + i).parent().parent().children('.day').children().children().is(':checked') && $('#pickupTime' + i).val() == ' ') {
      flag = false;
    }
  }
  let name = $('#name').val();
  let age = $('#age').val();
  let email = $("#email").val();
  let phone = $("#phone").val();
  let gender = $('input[type=radio][name=gender]:checked').val();

  let sun = $('.sun1').val();
  let mon = $('.mon1').val();
  let tue = $('.tue1').val();
  let wed = $('.wed1').val();
  let thr = $('.thr1').val();
  let fri = $('.fri1').val();
  let sat = $('.sat1').val();


  
  if ($('#name').valid() &&
    $('#age').valid() &&
    $("#email").valid() &&
    $("#phone").valid() &&
    $("#nextday2").valid() &&
    flag
    //  sun != " " ||
    // mon != " " || tue != " " || wed != " " || thr != " " || fri != " " || sat != " "
    && $("input[name='gender']:checked") != undefined) {
    // if the days checkbox is checked and the value of pickupTime is null then  flag will be set at false
    // var flag = true;
    
    // console.log($('#pickupTime1').parent().parent().children('.day').children().children().is(':checked') && $('#pickupTime1').val() == " ");
    // console.log($('#pickupTime2').parent().parent().children('.day').children().children().is(':checked') && $('#pickupTime2').val() == " ");
    // console.log($('#pickupTime3').parent().parent().children('.day').children().children().is(':checked') && $('#pickupTime3').val() == " ");
    // console.log($('#pickupTime4').parent().parent().children('.day').children().children().is(':checked') && $('#pickupTime4').val() == " ");
    // console.log($('#pickupTime5').parent().parent().children('.day').children().children().is(':checked') && $('#pickupTime5').val() == " ");
    // console.log($('#pickupTime6').parent().parent().children('.day').children().children().is(':checked') && $('#pickupTime6').val() == " ");
    // console.log($('#pickupTime7').parent().parent().children('.day').children().children().is(':checked') && $('#pickupTime7').val() == " ");

    if (flag == true && $("input[name='checkbox_1']:checked") != undefined) {
      console.log({ name, age, email, phone, gender })

      const data = {
        'name_': name,
        'age': age,
        'email': email,
        'phoneno': phone,
        'gender': gender,
        'sunday': sun,
        'monday': mon,
        'tuesday': tue,
        'wendesday': wed,
        'thurday': thr,
        'friday': fri,
        'saturday': sat


      }
      localStorage.clear();
      const userData = localStorage.setItem("data", JSON.stringify(data));
      console.log('userData', userData);
      window.open("../html/page2.html")
    }

  }

})

  
  
  
  

  