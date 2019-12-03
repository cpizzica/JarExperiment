jsPsych.plugins["image-keyboard-response"] = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('image-keyboard-response', 'stimulus', 'image');

  plugin.info = {
    name: 'image-keyboard-response',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.IMAGE,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The image to be displayed'
      },
      stimulus_height: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Image height',
        default: null,
        description: 'Set the image height in pixels'
      },
      stimulus_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Image width',
        default: null,
        description: 'Set the image width in pixels'
      },
      maintain_aspect_ratio: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Maintain aspect ratio',
        default: true,
        description: 'Maintain the aspect ratio after setting width or height'
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Choices',
        default: jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed below the stimulus.'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        default: null,
        description: 'How long to hide the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show trial before it ends.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, trial will end when subject makes a response.'
      },
    }
  }

  plugin.trial = function(display_element, trial) {

    // display stimulus
    var html = '<img src="'+trial.stimulus+'" id="jspsych-image-keyboard-response-stimulus" style="';
    if(trial.stimulus_height !== null){
      html += 'height:'+trial.stimulus_height+'px; '
      if(trial.stimulus_width == null && trial.maintain_aspect_ratio){
        html += 'width: auto; ';
      }
    }
    if(trial.stimulus_width !== null){
      html += 'width:'+trial.stimulus_width+'px; '
      if(trial.stimulus_height == null && trial.maintain_aspect_ratio){
        html += 'height: auto; ';
      }
    }
    html +='"></img>';
      html +=  '<canvas id="BallsDrawn" width="600" height="200">'+ '</canvas>'
	html += 'Block Percent Complete: ' + Block_Percent + '%'

    // add prompt
    if (trial.prompt !== null){
      html += trial.prompt;
    }

    // render
    display_element.innerHTML = html;

var canvas = new fabric.Canvas('BallsDrawn'); 
var ScreenText = new fabric.Text('Balls Drawn:', {fontSize: 25, left: 0, top: 0})
canvas.add (ScreenText)
      
switch(jar_selection_sequence[sequence_counter]) {
    case 'jar_1_both':
    var ball_amount = ball_drawing_sequence_1[sequence_counter_jar_1]
    break;
    
    case 'jar_2_both':
    var ball_amount = ball_drawing_sequence_2[sequence_counter_jar_2]
    break;
}
switch(ball_amount){   

    case 2:
        var ball_1 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[0],
        left: 10,
        top: 50,
        });
            
        var ball_2 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[1],
        left: 40,
        top: 50,
        });
        
        canvas.add(ball_1, ball_2)
        break;
        
    case 5:
          var ball_1 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[0],
        left: 10,
        top: 50,
        });
            
        var ball_2 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[1],
        left: 40,
        top: 50,
        });
        
          var ball_3 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[2],
        left: 70,
        top: 50,
        });
        
          var ball_4 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[3],
        left: 100,
        top: 50,
        });
        
          var ball_5 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[4],
        left: 130,
        top: 50,
        });
        
        canvas.add(ball_1, ball_2, ball_3, ball_4, ball_5)
        break;
		
    case 10:
          var ball_1 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[0],
        left: 10,
        top: 50,
        });
            
        var ball_2 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[1],
        left: 40,
        top: 50,
        });
        
        var ball_3 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[2],
        left: 70,
        top: 50,
        });
        
        var ball_4 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[3],
        left: 100,
        top: 50,
        });
		
        var ball_5 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[4],
        left: 130,
        top: 50,
        });
		
        var ball_6 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[5],
        left: 160,
        top: 50,
        });
		
        var ball_7 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[6],
        left: 190,
        top: 50,
        });
		
        var ball_8 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[7],
        left: 220,
        top: 50,
        });
		
        var ball_9 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[8],
        left: 250,
        top: 50,
        });
		
        var ball_10 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[9],
        left: 280,
        top: 50,
        });
        
        canvas.add(ball_1, ball_2, ball_3, ball_4, ball_5, ball_6, ball_7, ball_8, ball_9, ball_10)
        break;
}      
      
    // store response
    var response = {
      rt: null,
      key: null
    };

    // function to end trial when it is time
    var end_trial = function() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // kill keyboard listeners
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }

      // gather the data to store for the trial
      var trial_data = {
        "rt": response.rt,
        "stimulus": trial.stimulus,
        "key_press": response.key
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // function to handle responses by the subject
    var after_response = function(info) {

      // after a valid response, the stimulus will have the CSS class 'responded'
      // which can be used to provide visual feedback that a response was recorded
      display_element.querySelector('#jspsych-image-keyboard-response-stimulus').className += ' responded';

      // only record the first response
      if (response.key == null) {
        response = info;
      }

      if (trial.response_ends_trial) {
    switch(jar_selection_sequence[sequence_counter]) {
    case 'jar_1_both':
            var TestTextCorrect = new fabric.Text('Correct', {fontSize: 30, left: 100, top: 100}) 
            var TestTextIncorrect = new fabric.Text('Incorrect', {fontSize: 30, left: 400, top: 100})
		
		
            if(tutorial_trials <= 5){
            canvas.add (TestTextCorrect, TestTextIncorrect)
            }
			
			if(jar_selection_sequence[sequence_counter] === 'jar_1_both' && response.key === 37){
				CorrectResponse += 1
			}
			
    break;
    
    case 'jar_2_both':
            var TestTextIncorrect = new fabric.Text('Incorrect', {fontSize: 30, left: 100, top: 100}) 
            var TestTextCorrect = new fabric.Text('Correct', {fontSize: 30, left: 400, top: 100}) 
            if(tutorial_trials <= 5){
            canvas.add (TestTextCorrect, TestTextIncorrect)
            }   
			
			if(jar_selection_sequence[sequence_counter] === 'jar_2_both' && response.key === 39){
				CorrectResponse += 1
			}
    break;
}
        if(tutorial_trials <=5){  
        setTimeout(end_trial, 2000);
        }
          else{
              end_trial()
          }
      }
    };

    // start the response listener
    if (trial.choices != jsPsych.NO_KEYS) {
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: 'performance',
        persist: false,
        allow_held_key: false
      });
    }

    // hide stimulus if stimulus_duration is set
    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#jspsych-image-keyboard-response-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

  };

  return plugin;
})();
