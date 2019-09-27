jsPsych.plugins["canvas-keyboard-response"] = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('canvas-keyboard-response', 'stimulus', 'image');

  plugin.info = {
    name: 'canvas-keyboard-response',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
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
      ballcount: {
          type: jsPsych.plugins.parameterType.INT,
          array: true,
          default: null,
          description: 'How many times a ball will be selected'
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
    var html = '<canvas id="jspsych-canvas-keyboard-response-stimulus" width="700" height="700" style="border:1px solid;">' + trial.stimulus + '</canvas>';

    // add prompt
    if (trial.prompt !== null){
      html += trial.prompt;
    }

    // render
    display_element.innerHTML = html;

      
      
      
    // store response
    var response = {
      rt: null,
      key: null
    };
      
var ctx = document.getElementById('jspsych-canvas-keyboard-response-stimulus')
var canvas = new fabric.Canvas('jspsych-canvas-keyboard-response-stimulus');    
    
      var ball = new fabric.Circle({
        radius: 10,
        fill: 'black',
        left: 300,
        top: 300,
        });

      var imgElement = document.getElementById('my-image');
      var imgInstance = new fabric.Image(imgElement, {
        left: 200,
        top: 200,
        angle: 0,
        opacity: 1.0
        });
      
var ScreenText = new fabric.Text('Balls Drawn:', {left: 0, top: 550})      
canvas.add (ball, imgInstance, ScreenText)
/*
var flip = function () {
	switch(jar_selection_sequence[0]){
	case 1:
		coinresult = jsPsych.randomization.sampleWithReplacement(jar_1_both);
		console.log(coinresult)
		break;
	case 2:
		coinresult = jsPsych.randomization.sampleWithReplacement(jar_2_both);
		console.log(coinresult)
		break
	}
}
*/
var jar_shake = []
var flip = function () {
	if(jar_selection_sequence[sequence_counter] === 'jar_1_both'){
		jar_shake = jsPsych.randomization.sampleWithReplacement(jar_1_both,1);
		coinresult = jar_shake[0]
	}
	else{
		jar_shake = jsPsych.randomization.sampleWithReplacement(jar_2_both,1);
		coinresult = jar_shake[0]

	}
}


var ResultsAnimation = function () {
    if(coinresult === 0){
        ball.set({fill: 'blue'})}
        else{
            ball.set({fill: 'red'})
        }
    do{
        ball.animate('top', 100,
    {onChange: canvas.renderAll.bind(canvas), 
    duration: 500})
    ball.set({top:100})
    }
    while(ball.get('top') == 300)
    }
var ReverseAnimation = function () {
    ball.animate('top', 300,
                 {onChange: canvas.renderAll.bind(canvas),
                duration: 500})
    ball.set({top:300})
}    

     
switch(jar_selection_sequence[sequence_counter]) {
    case 'jar_1_both':
    var ball_amount = ball_drawing_sequence_1[sequence_counter_jar_1]
    break;
    
    case 'jar_2_both':
    var ball_amount = ball_drawing_sequence_2[sequence_counter_jar_2]
    break;
}
    
//var ball_amount = ball_drawing_sequence[sequence_counter]

     
switch(ball_amount){
    case 2:
        var ball_1 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[0],
        left: 10,
        top: 600,
        });
        canvas.add(ball_1)
        break;
        
    case 5:
          var ball_1 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[0],
        left: 10,
        top: 600,
        });
            
        var ball_2 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[1],
        left: 40,
        top: 600,
        });
        
        var ball_3 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[2],
        left: 70,
        top: 600,
        });
        
        var ball_4 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[3],
        left: 100,
        top: 600,
        });
        
        canvas.add(ball_1, ball_2, ball_3, ball_4)
        break;
		
    case 10:
          var ball_1 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[0],
        left: 10,
        top: 600,
        });
            
        var ball_2 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[1],
        left: 40,
        top: 600,
        });
        
        var ball_3 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[2],
        left: 70,
        top: 600,
        });
        
        var ball_4 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[3],
        left: 100,
        top: 600,
        });
		
        var ball_5 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[4],
        left: 130,
        top: 600,
        });
		
        var ball_6 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[5],
        left: 160,
        top: 600,
        });
		
        var ball_7 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[6],
        left: 190,
        top: 600,
        });
		
        var ball_8 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[7],
        left: 220,
        top: 600,
        });
		
        var ball_9 = new fabric.Circle({
        radius: 10,
        fill: colorresultarray[8],
        left: 250,
        top: 600,
        });
        
        canvas.add(ball_1, ball_2, ball_3, ball_4, ball_5, ball_6, ball_7, ball_8, ball_9)
        break;
}
                  
function BallCondition() {
flip()
ResultsAnimation()
setTimeout(ReverseAnimation, 1000)
}
BallCondition()
    
    
    
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
        "key_press": response.key,
        "Ball_color": coinresult
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
      display_element.querySelector('#jspsych-canvas-keyboard-response-stimulus').className += ' responded';

      // only record the first response
      if (response.key == null) {
        response = info;
      }

      if (trial.response_ends_trial) {
        end_trial();
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
        display_element.querySelector('#jspsych-canvas-keyboard-response-stimulus').style.visibility = 'hidden';
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
