$('#sounds').addEventListener('click', () => {
    if ($('#sounds').checked) {
        $('#sound').volume = radioConfigs.getItem('volume');
        radioConfigs.setItem('soundsVolume', $('#sound').volume);
    } else {
        $('#sound').volume = 0;
        radioConfigs.setItem('soundsVolume', 0);
    }
})

$('#sound').volume = radioConfigs.getItem('soundsVolume');
$('#sounds').checked = !!radioConfigs.getItem('soundsVolume');