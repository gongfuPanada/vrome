/**
 * Util
 */
//TODO should use focus/click event to active some js binding

var Util = (function(){
	function focusFirstTextInput(){
		var elem = document.querySelector('input[type="text"],input[type="search"]');
		if (elem) {
			elem.focus();
			elem.setSelectionRange(0,elem.value.length);
		}
	}

	function blurFocus(){
		document.activeElement.blur();
	}

	function moveFirstOrSelectAll(){
		var elem = document.activeElement;
		var caret_position = elem.selectionEnd;
		if (caret_position == 0){
			elem.setSelectionRange(0, elem.value.length); // select all text
		}else{
			elem.setSelectionRange(0, 0);
		}
	}

	function moveEnd(){
		var elem = document.activeElement;
		elem.setSelectionRange(elem.value.length, elem.value.length);
	}

	function deleteForward(){
		var elem = document.activeElement;
		var caret_position = elem.selectionEnd;
		var org_str = elem.value;
		elem.value = org_str.substring(0, caret_position) + org_str.substring(caret_position + 1, org_str.length);
		elem.setSelectionRange(caret_position, caret_position);
	}

	function deleteBackward(){
		var elem = document.activeElement;
		var caret_position = elem.selectionEnd;
		var org_str = elem.value;
		elem.value = org_str.substring(0, caret_position - 1) + org_str.substring(caret_position, org_str.length);
		elem.setSelectionRange(caret_position - 1, caret_position - 1);
	}

	function deleteBackwardWord(){
		var elem = document.activeElement;
		var caret_position = elem.selectionEnd;
		var org_str = elem.value;
		elem.value = org_str.substring(0, caret_position - 1).replace(/\S*\s*$/,'') + org_str.substring(caret_position, org_str.length);
		var position = elem.value.length - (org_str.length - caret_position);
		elem.setSelectionRange(position,position);
	}

  return {
    focusFirstTextInput  : focusFirstTextInput,
    blurFocus            : blurFocus,
    moveFirstOrSelectAll : moveFirstOrSelectAll,
    moveEnd              : moveEnd,
    deleteForward        : deleteForward,
    deleteBackward       : deleteBackward,
    deleteBackwardWord   : deleteBackwardWord
  }
})()