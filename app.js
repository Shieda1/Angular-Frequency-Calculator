// https://calculator.swiftutors.com/angular-speed-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const angularFrequencyRadio = document.getElementById('angularFrequencyRadio');
const frequencyRadio = document.getElementById('frequencyRadio');

let angularFrequency;
let frequency = v1;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

angularFrequencyRadio.addEventListener('click', function() {
  variable1.textContent = '(f) Frequency (Hz)';
  frequency = v1;
  result.textContent = '';
});

frequencyRadio.addEventListener('click', function() {
  variable1.textContent = '(ω) Angular Frequency (rad/sec)';
  angularFrequency = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(angularFrequencyRadio.checked)
    result.textContent = `Angular Frequency = ${computeAngularFrequency().toFixed(2)} rad/sec`;

  else if(frequencyRadio.checked)
    result.textContent = `Frequency = ${computeFrequency().toFixed(2)} Hz`;
})

// calculation

function computeAngularFrequency() {
  return 2 * Math.PI * Number(frequency.value);
}

function computeFrequency() {
  return Number(angularFrequency.value) / (2 * Math.PI);
}