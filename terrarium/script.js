dragElement(document.getElementById("plant1"));
dragElement(document.getElementById("plant2"));
dragElement(document.getElementById("plant3"));
dragElement(document.getElementById("plant4"));
dragElement(document.getElementById("plant5"));
dragElement(document.getElementById("plant6"));
dragElement(document.getElementById("plant7"));
dragElement(document.getElementById("plant8"));
dragElement(document.getElementById("plant9"));
dragElement(document.getElementById("plant10"));
dragElement(document.getElementById("plant11"));
dragElement(document.getElementById("plant12"));
dragElement(document.getElementById("plant13"));
dragElement(document.getElementById("plant14"));

function dragElement(terrariumElement) {
  //set 4 positions for positioning on the screen
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  terrariumElement.onpointerdown = pointerDrag;
  //keep track of the plant's coordinates when it's moved
  function pointerDrag(e) {
    e.preventDefault();
    console.log(e);
    pos3 = e.clientX;
    pos4 = e.clientY;
    //indicate the plant to be moved and stoped with the pointer
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
    //edit initial positions 1-4 by recalculating them with X and Y cordinates from the previous step
    //manupilate css style of the plant base on the calculation of their current and initial positions
    function elementDrag(e) {
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      console.log(pos1, pos2, pos3, pos4);
      terrariumElement.style.top = terrariumElement.offsetTop - pos2 + "px";
      terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + "px";
    }
    //reset onpointerup and onpointermove events so the current plant can be dragged again or
    //another plant can be ready to be dragged
    function stopElementDrag() {
      document.onpointerup = null;
      document.onpointermove = null;
    }
  }
}
