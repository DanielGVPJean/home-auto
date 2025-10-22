// script.js
$( document ).ready(function() {
// Declare variables to store device states
var state_foco1, state_foco2, state_foco3, state_foco4, state_foco5, state_foco6, state_foco7, state_pc, state_tv, state_bocinas, state_regadera, state_estufa, state_boiler;

// Function to get and display sensor data using AJAX
function getAndDisplaySensorData() {
    $.ajax({
      type: 'POST',
      url: 'assets/php/get_sensor_data.php',
      success: function (data) {
        // Parse the JSON data and update the HTML of corresponding divs
        var sensorData = JSON.parse(data);
        $('#consumo_gas').text(sensorData.consumo_gas || 'N/A');
        $('#consumo_agua').text(sensorData.consumo_agua || 'N/A');
        $('#reserva_agua').text(sensorData.reserva_agua || 'N/A');
        $('#consumo_elect').text(sensorData.consumo_elect || 'N/A');
        $('#generador_solar').text(sensorData.generador_solar || 'N/A');
        $('#generador_heolico').text(sensorData.generador_heolico || 'N/A');
      }
    });
  }
  
  // Initialize device states and sensor data on page load
  getAndDisplaySensorData();
  
  // Set interval to update sensor data every 5 seconds (adjust as needed)
  setInterval(getAndDisplaySensorData, 50);

// Function to get initial device states using AJAX
function getDeviceStates() {
  $.ajax({
    type: 'POST',
    url: 'assets/php/get_device_states.php',
    success: function (data) {
      // Parse the JSON data and update the variables
      var states = JSON.parse(data);
      state_foco1 = states.foco1;
      state_foco2 = states.foco2;
      state_foco3 = states.foco3;
      state_foco4 = states.foco4;
      state_foco5 = states.foco5;
      state_foco6 = states.foco6;
      state_foco7 = states.foco7;
      state_pc = states.pc;
      state_tv = states.tv;
      state_bocinas = states.bocinas;
      state_regadera = states.regadera;
      state_estufa = states.estufa;
      state_boiler = states.boiler;
      blur("foco1",state_foco1);
      blur("foco2",state_foco2);
      blur("foco3",state_foco3);
      blur("foco4",state_foco4);
      blur("foco5",state_foco5);
      blur("foco6",state_foco6);
      blur("foco7",state_foco7);
      blur("pc",state_pc);
      blur("tv",state_tv);
      blur("bocinas",state_bocinas);
      blur("regadera",state_regadera);
      blur("estufa",state_estufa);
      blur("boiler",state_boiler);
    }
  });
}

function blur(device,state){
    if (state == 0) {
        $('.' + device).addClass('blur');
      }else{
        $('.' + device).removeClass('blur');
      }
}

// Function to update device state using AJAX
function updateDeviceState(device, newState) {
    if(newState == true){
        newState = 1;
    }else{
        newState = 0;
    }
    blur(device,newState);
  $.ajax({
    type: 'POST',
    url: 'assets/php/update_device_state.php',
    data: { device: device, state: newState },
    success: function (data) {
      // Handle the success response if needed
    }
  });
}

// Initialize device states on page load
getDeviceStates();

function invert(value){
    return value == 1 ? 0 : 1;
}
// Event listeners for device buttons
$('.foco1').click(function () {
  state_foco1 = invert(state_foco1); // Toggle state
  updateDeviceState('foco1', state_foco1);
});

$('.foco2').click(function () {
  state_foco2 = invert(state_foco2);
  updateDeviceState('foco2', state_foco2);
});

$('.foco3').click(function () {
  state_foco3 = invert(state_foco3);
  updateDeviceState('foco3', state_foco3);
});

$('.foco4').click(function () {
  state_foco4 = invert(state_foco4);
  updateDeviceState('foco4', state_foco4);
});

$('.foco5').click(function () {
  state_foco5 = invert(state_foco5);
  updateDeviceState('foco5', state_foco5);
});

$('.foco6').click(function () {
  state_foco6 = invert(state_foco6);
  updateDeviceState('foco6', state_foco6);
});

$('.foco7').click(function () {
  state_foco7 = invert(state_foco7);
  updateDeviceState('foco7', state_foco7);
});

$('.pc').click(function () {
  state_pc = invert(state_pc);
  updateDeviceState('pc', state_pc);
});

$('.tv').click(function () {
  state_tv = invert(state_tv);
  updateDeviceState('tv', state_tv);
});

$('.bocinas').click(function () {
  state_bocinas = invert(state_bocinas);
  updateDeviceState('bocinas', state_bocinas);
});

$('.regadera').click(function () {
  state_regadera = invert(state_regadera);
  updateDeviceState('regadera', state_regadera);
});

$('.estufa').click(function () {
  state_estufa = invert(state_estufa);
  updateDeviceState('estufa', state_estufa);
});

$('.boiler').click(function () {
  state_boiler = invert(state_boiler);
  updateDeviceState('boiler', state_boiler);
});

// Repeat this pattern for other buttons...

// You can add more event listeners for other buttons in a similar manner
});