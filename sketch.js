// let capture;
// let posenet;
// let noseX,noseY;
// let people=[];
// let smoothPeople = [];
// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     capture=createCapture(VIDEO);
//     capture.size(windowWidth, windowHeight);
//     capture.hide();
//     posenet=ml5.poseNet(capture,modelLoaded);
//     posenet.on('pose',receivePoses);
// }
// function receivePoses(poses){
//     console.log(poses);
//     // if(poses.length>0){
//     //     singlepose=poses[0].pose;
//     // }
//     people=poses;
    
//     console.log(noseX+" "+noseY);
// }
// function modelLoaded(){
//     console.log("Model has loaded.");
// }
// function draw() {
//     //background(220);
//     image(capture,0,0,width,height);
    
//     fill(255, 0, 0);
//     for(let j=0;j<people.length;j++){
//         let singlepose=people[j].pose;
//         if(singlepose){
//         for(let i=0;i<singlepose.keypoints.length;i++){
            
//             let X=singlepose.keypoints[i].position.x;
//             let Y=singlepose.keypoints[i].position.y;
            
//             ellipse(X, Y, 10, 10);
            
//         }
//         let skeleton=people[j].skeleton;
//         for(let i=0;i<skeleton.length;i++){
//             stroke(255,255,255);
//             strokeWeight(5);
//             line(skeleton[i][0].position.x,skeleton[i][0].position.y,skeleton[i][1].position.x,skeleton[i][1].position.y);
//         }
//     }
//     }
    
// }
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }


// let capture;
// let posenet;
// let people = [];

// function setup() {
//   createCanvas(windowWidth, windowHeight);

//   // Capture video at fixed resolution for PoseNet
//   capture = createCapture(VIDEO);
//   capture.size(640, 480); // PoseNet works well at this resolution
//   capture.hide();

//   posenet = ml5.poseNet(capture, modelLoaded);
//   posenet.on('pose', receivePoses);
// }

// function modelLoaded() {
//   console.log("✅ PoseNet model loaded.");
// }

// function receivePoses(poses) {
//   people = poses;
// }

// function draw() {
//   background(0);

//   // Maintain video aspect ratio
//   let videoAspect = capture.width / capture.height;
//   let canvasAspect = width / height;
//   let displayWidth, displayHeight;

//   if (canvasAspect > videoAspect) {
//     displayHeight = height;
//     displayWidth = videoAspect * height;
//   } else {
//     displayWidth = width;
//     displayHeight = width / videoAspect;
//   }

//   let offsetX = (width - displayWidth) / 2;
//   let offsetY = (height - displayHeight) / 2;

//   // Draw the video
//   image(capture, offsetX, offsetY, displayWidth, displayHeight);

//   // Scale factors for keypoints
//   let scaleX = displayWidth / capture.width;
//   let scaleY = displayHeight / capture.height;

//   fill(255, 0, 0);
//   stroke(255);
//   strokeWeight(2);

//   for (let j = 0; j < people.length; j++) {
//     let singlepose = people[j].pose;
//     let skeleton = people[j].skeleton;

//     if (singlepose) {
//       // Draw keypoints without mirroring
//       for (let i = 0; i < singlepose.keypoints.length; i++) {
//         let x = offsetX + singlepose.keypoints[i].position.x * scaleX;
//         let y = offsetY + singlepose.keypoints[i].position.y * scaleY;
//         ellipse(x, y, 10, 10);
//       }

//       // Draw skeleton lines without mirroring
//       for (let i = 0; i < skeleton.length; i++) {
//         let partA = skeleton[i][0];
//         let partB = skeleton[i][1];
//         line(
//           offsetX + partA.position.x * scaleX,
//           offsetY + partA.position.y * scaleY,
//           offsetX + partB.position.x * scaleX,
//           offsetY + partB.position.y * scaleY
//         );
//       }
//     }
//   }
// }

// // Make canvas responsive when window size changes
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }






// let capture;
// let posenet;
// let people = [];

// function setup() {
//   createCanvas(windowWidth, windowHeight);

//   // Mobile/desktop compatible video capture
//   capture = createCapture({
//     video: {
//       facingMode: "user", // front camera for mobile
//       width: { ideal: 640 }, // allow browser to pick optimal resolution
//       height: { ideal: 480 }
//     },
//     audio: false
//   });
//   capture.hide();

//   posenet = ml5.poseNet(capture, modelLoaded);
//   posenet.on('pose', receivePoses);
// }

// function modelLoaded() {
//   console.log("✅ PoseNet model loaded.");
// }

// function receivePoses(poses) {
//   people = poses;
// }

// function draw() {
//   background(0);

//   // Maintain aspect ratio of video
//   let videoAspect = capture.width / capture.height;
//   let canvasAspect = width / height;
//   let displayWidth, displayHeight;

//   if (canvasAspect > videoAspect) {
//     displayHeight = height;
//     displayWidth = videoAspect * height;
//   } else {
//     displayWidth = width;
//     displayHeight = width / videoAspect;
//   }

//   let offsetX = (width - displayWidth) / 2;
//   let offsetY = (height - displayHeight) / 2;

//   // Draw the video
//   image(capture, offsetX, offsetY, displayWidth, displayHeight);

//   let scaleX = displayWidth / capture.width;
//   let scaleY = displayHeight / capture.height;

//   fill(255, 0, 0);
//   stroke(255);
//   strokeWeight(2);

//   // Draw keypoints and skeleton
//   for (let j = 0; j < people.length; j++) {
//     let pose = people[j].pose;
//     let skeleton = people[j].skeleton;

//     if (pose) {
//       // Draw keypoints
//       for (let i = 0; i < pose.keypoints.length; i++) {
//         let x = offsetX + pose.keypoints[i].position.x * scaleX;
//         let y = offsetY + pose.keypoints[i].position.y * scaleY;
//         ellipse(x, y, 10, 10);
//       }

//       // Draw skeleton
//       for (let i = 0; i < skeleton.length; i++) {
//         let partA = skeleton[i][0];
//         let partB = skeleton[i][1];
//         line(
//           offsetX + partA.position.x * scaleX,
//           offsetY + partA.position.y * scaleY,
//           offsetX + partB.position.x * scaleX,
//           offsetY + partB.position.y * scaleY
//         );
//       }
//     }
//   }
// }

// // Make canvas responsive
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }















let capture;
let posenet;
let people = [];

let postureStatus = "Loading...";
let avgAngle = 0;
let smoothFactor = 0.2; // smooths angle variation
let goodFrames = 0;
let badFrames = 0;

function setup() {
  createCanvas(1000, 600);
  textAlign(CENTER);
  textSize(28);

  // Setup webcam
  capture = createCapture({
    video: {
      facingMode: "user",
      width: { ideal: 1000 },
      height: { ideal: 600 },
    },
    audio: false,
  });
  capture.hide();

  // Load PoseNet
  posenet = ml5.poseNet(capture, modelLoaded);
  posenet.on("pose", receivePoses);

  frameRate(10);
}

function modelLoaded() {
  console.log("✅ PoseNet model loaded.");
  postureStatus = "Model Ready - Align yourself in frame";
  document.getElementById("status").textContent = postureStatus;
}

function receivePoses(poses) {
  people = poses;
}

function draw() {
  background(0);

  if (!capture.loadedmetadata) return;

  // 1️⃣ Draw webcam video
  image(capture, 0, 0, width, height);

  // 2️⃣ Draw keypoints and skeleton (overlay)
  if (people.length > 0) {
    let pose = people[0].pose;
    drawKeypoints(pose, people[0].skeleton); // <-- call here
  }

  // 3️⃣ Analyze posture and update status
  if (people.length > 0) {
    let pose = people[0].pose;
    let result = analyzePosture(pose);

    // Smooth sideways angle
    avgAngle = smoothFactor * result.angleSide + (1 - smoothFactor) * avgAngle;

    let isBadPosture = avgAngle > 15 || result.forwardSlouch || result.backwardLean;

    if (isBadPosture) {
      badFrames++;
      goodFrames = 0;
    } else {
      goodFrames++;
      badFrames = 0;
    }

    // Update posture status
    if (badFrames > 3) {
      if (result.forwardSlouch) postureStatus = "⚠️ Slouching Forward!";
      else if (result.backwardLean) postureStatus = "⚠️ Leaning Back!";
      else postureStatus = `⚠️ Sideways Lean Detected! (Angle: ${avgAngle.toFixed(1)}°)`;
      showBadPosture();
    } else if (goodFrames > 3) {
      postureStatus = `✅ Good Posture (Angle: ${avgAngle.toFixed(1)}°)`;
      showGoodPosture();
    }
  }

  // 4️⃣ Display posture text
  displayStatus();
}



// -----------------------------
// 🔹 Draw keypoints (for skeleton visualization)
// -----------------------------
function drawKeypoints(pose, skeleton) {
  fill(255, 0, 0);
  noStroke();

  // Calculate scale factors
  let scaleX = width / capture.width;
  let scaleY = height / capture.height;

  // Draw keypoints
  for (let i = 0; i < pose.keypoints.length; i++) {
    let kp = pose.keypoints[i];
    if (kp.score > 0.5) {
      let x = kp.position.x * scaleX;
      let y = kp.position.y * scaleY;
      ellipse(x, y, 8, 8);
    }
  }

  // Draw skeleton
  stroke(255);
  strokeWeight(2);
  for (let i = 0; i < skeleton.length; i++) {
    let partA = skeleton[i][0];
    let partB = skeleton[i][1];

    let x1 = partA.position.x * scaleX;
    let y1 = partA.position.y * scaleY;
    let x2 = partB.position.x * scaleX;
    let y2 = partB.position.y * scaleY;

    line(x1, y1, x2, y2);
  }
}



// -----------------------------
// 📐 Angle-based posture detection
// -----------------------------
function analyzePosture(pose) {
  const nose = pose.nose;
  const leftShoulder = pose.leftShoulder;
  const rightShoulder = pose.rightShoulder;
  const leftHip = pose.leftHip;
  const rightHip = pose.rightHip;

  if (nose && leftShoulder && rightShoulder && leftHip && rightHip) {
    // Midpoints of shoulders and hips
    let shoulderMidX = (leftShoulder.x + rightShoulder.x) / 2;
    let shoulderMidY = (leftShoulder.y + rightShoulder.y) / 2;

    let hipMidY = (leftHip.y + rightHip.y) / 2;

    // -----------------------------
    // 1️⃣ Sideways leaning (horizontal)
    // -----------------------------
    let dx = nose.x - shoulderMidX;
    let dy = shoulderMidY - nose.y;
    let angleSide = degrees(atan2(abs(dx), abs(dy))); // 0 = perfect vertical

    // -----------------------------
    // 2️⃣ Forward/backward leaning (vertical)
    // -----------------------------
    let torsoLength = hipMidY - shoulderMidY;        // shoulder to hip
    let noseToShoulder = shoulderMidY - nose.y;      // nose relative to shoulders

    let slouchRatio = noseToShoulder / torsoLength;  // ratio of nose position along torso
    let forwardSlouch = slouchRatio < 0.4;           // leaning forward
    let backwardLean = slouchRatio > 1.3;            // leaning backward

    return { angleSide, forwardSlouch, backwardLean };
  }

  return { angleSide: 0, forwardSlouch: false, backwardLean: false };
}

// -----------------------------
// 🎨 UI feedback functions
// -----------------------------
function showBadPosture() {
  background(80, 0, 0, 120);
  document.getElementById("status").style.color = "#ff3b3b";
  document.querySelector("canvas").style.boxShadow = "0 0 25px rgba(255,0,0,0.6)";
}

function showGoodPosture() {
  background(0, 80, 0, 120);
  document.getElementById("status").style.color = "#00ff88";
  document.querySelector("canvas").style.boxShadow = "0 0 25px rgba(0,255,100,0.6)";
}

// -----------------------------
// 🧾 Display posture status
// -----------------------------
function displayStatus() {
  fill(255);
  noStroke();
  text(postureStatus, width / 2, height - 30);
  document.getElementById("status").textContent = postureStatus;
}

// -----------------------------
function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 100);
}
