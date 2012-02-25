function dropDownButton(id, data){
  var img, div, li, mUpelement, buttonHeight = 0, dropDownBoxWidth = 0, dropDownBoxHeight = 0, elementHeight = 0;
  
  img = "<img src='" + data.buttonImg[0].src + "' width='" + data.buttonImg[0].width + "' height='" + data.buttonImg[0].height + "' />";
  $(id).append(img);
  
  div = "<div class='dropdown'><ul class='dropdown-list'></ul></div>";
  $(id).append(div);
  
  data.links.forEach(function(o){
    li = "<li><a href='" + o.url + "'><span class='ellipsis'>" + o.title + "</span></a></li>";
    $('ul.dropdown-list').append(li);
    dropDownBoxHeight += 23;
  });
  
  $(id).click(function() {
   $('.dropdown').toggleClass('active');
  });
 
  if(data.mouseupElement[0].atrType === 'id') mUpelement ='#'+data.mouseupElement[0].atrName;
  else mUpelement = '.'+data.mouseupElement[0].atrName;
  
  $(mUpelement).mouseup(function() {
    $('.dropdown').removeClass('active');
  });
  
  buttonHeight = (data.buttonImg[0].height + data.buttonPadding[0].top + data.buttonPadding[0].bottom);
  dropDownBoxWidth = data.dropdownBoxWidth+5;
  dropDownBoxHeight = ((dropDownBoxHeight+8)-1);
  elementHeight = buttonHeight + dropDownBoxHeight + data.dropdownPositionTop;
  
  //mUpelement styles
  $(mUpelement).css('position','absolute');
  $(mUpelement).css('top',0);
  $(mUpelement).css('right',0);
  $(mUpelement).css('bottom',0);
  $(mUpelement).css('left',0);
  
  //button styles
  $(id).css('width',data.buttonImg[0].width);
  $(id).css('height',data.buttonImg[0].height);
  $(id).css('padding-top',data.buttonPadding[0].top);
  $(id).css('padding-right',data.buttonPadding[0].right);
  $(id).css('padding-bottom',data.buttonPadding[0].bottom);
  $(id).css('padding-left',data.buttonPadding[0].left);
  $(id).css('top',data.top);
  $(id).css('right',data.right);
  $(id).css('bottom',data.bottom);
  $(id).css('left',data.left);
  
  //dropdown styles
  $('.dropdown').css('width',data.dropdownBoxWidth);
  
  if(data.left <= dropDownBoxWidth && data.left !== null){
    $('.dropdown').css('left',-10);
  }else{
    $('.dropdown').css('right',113);
  }
  
  if(data.bottom <= elementHeight && data.bottom !== null){
    $('.dropdown').css('top',-elementHeight);
  }else{
    $('.dropdown').css('top',data.dropdownPositionTop);
  }
  
        
}

(function($){
	$.fn.dropDownButton = function(options){
		var id	= $(this), opts;

		$.fn.dropDownButton.defaults = {
   		mouseupElement: [{atrType: 'id', atrName: 'container'}],
   		buttonImg: [{src: 'images/actions.png', width: 27, height: 16}],
   		links: [{title: 'Google', url: 'http://www.google.com'},{title: 'Yahoo', url: 'http://www.yahoo.com'}],
   		buttonPadding: [{top: 3, right: 15, bottom: 3, left: 15}],
   		top: null,
   		right: null,
   		bottom: null,
   		left: null,
   		dropdownBoxWidth: 150,
   		dropdownPositionTop: 5
		};
		
		opts = $.extend({}, $.fn.dropDownButton.defaults, options);
		
    dropDownButton(id, opts);
    
		return this;	
	};

})(jQuery);