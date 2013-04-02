/*
	Implements tinyMCE for available textareas. The tinyMCE.init call can be
	extended with further buttons/configuration options. For details, see:
	http://tinymce.moxiecode.com/wiki.php/Configuration
*/

jQuery(document).ready(function() {
	
	jQuery('textarea.tinymce').tinymce({
		
		script_url: Symphony.Context.get('root') + '/extensions/richtext_tinymce/lib/tiny_mce.js',

		theme: 'advanced',
		plugins: 'paste, table',
		skin: 'symphony',
		entity_encoding : "numeric",
		
		width: '100%',
		theme_advanced_buttons1 : 'formatselect,bold,italic,underline,|,bullist,numlist,outdent,indent,|,blockquote,link,unlink,image,|,copy,pasteword,|,undo,redo,|,cleanup,code',
		theme_advanced_buttons2 : 'tablecontrols',
		theme_advanced_buttons3 : '',
		theme_advanced_buttons4 : '',
		theme_advanced_blockformats : 'p,h4,h5,h6,pre',
		theme_advanced_toolbar_location : 'top',
		theme_advanced_toolbar_align : 'left',
		theme_advanced_resizing : true,

		/* paste plugin settings: see http://www.tinymce.com/wiki.php/plugin:paste */
		paste_auto_cleanup_on_paste : true,
		paste_convert_middot_lists : true,
		paste_retain_style_properties : 'none',
		// paste_strip_class_attributes : 'none', 'all', or 'mso'
		paste_strip_class_attributes : 'all',
		paste_remove_spans : 'true',
		paste_dialog_width : 400,
		paste_dialog_height : 600,
		// paste_strip_class_attributes : can be set to br, p or combined.
		paste_text_linebreaktype : 'p',
		
		template_external_list_url : 'lists/template_list.js',
		external_link_list_url : 'lists/link_list.js',
		external_image_list_url : 'lists/image_list.js',
		media_external_list_url : 'lists/media_list.js',
		
		convert_urls: false,
		entities: ''
		
	});
	
});