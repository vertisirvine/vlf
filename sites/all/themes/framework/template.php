<?php

/**

 * Implements hook_html_head_alter().

 * We are overwriting the default meta character type tag with HTML5 version.

 */

function framework_html_head_alter(&$head_elements) {

  $head_elements['system_meta_content_type']['#attributes'] = array(

    'charset' => 'utf-8'

  );

}



/**

 * Return a themed breadcrumb trail.

 *

 * @param $breadcrumb

 *   An array containing the breadcrumb links.

 * @return a string containing the breadcrumb output.

 */

function framework_breadcrumb($variables) {

  $breadcrumb = $variables['breadcrumb'];



  if (!empty($breadcrumb)) {

    // Provide a navigational heading to give context for breadcrumb links to

    // screen-reader users. Make the heading invisible with .element-invisible.

    $heading = '<h2 class="element-invisible">' . t('You are here') . '</h2>';

    // Uncomment to add current page to breadcrumb

	// $breadcrumb[] = drupal_get_title();

    return '<nav class="breadcrumb">' . $heading . implode(' » ', $breadcrumb) . '</nav>';

  }

}



/**

 * Duplicate of theme_menu_local_tasks() but adds clearfix to tabs.

 */

function framework_menu_local_tasks(&$variables) {

  $output = '';



  if (!empty($variables['primary'])) {

    $variables['primary']['#prefix'] = '<h2 class="element-invisible">' . t('Primary tabs') . '</h2>';

    $variables['primary']['#prefix'] .= '<ul class="tabs primary clearfix">';

    $variables['primary']['#suffix'] = '</ul>';

    $output .= drupal_render($variables['primary']);

  }

  if (!empty($variables['secondary'])) {

    $variables['secondary']['#prefix'] = '<h2 class="element-invisible">' . t('Secondary tabs') . '</h2>';

    $variables['secondary']['#prefix'] .= '<ul class="tabs secondary clearfix">';

    $variables['secondary']['#suffix'] = '</ul>';

    $output .= drupal_render($variables['secondary']);

  }

  return $output;

}



/**

 * Override or insert variables into the node template.

 */

function framework_preprocess_node(&$variables) {

  $variables['submitted'] = t('Published by !username on !datetime', array('!username' => $variables['name'], '!datetime' => $variables['date']));

  if ($variables['view_mode'] == 'full' && node_is_page($variables['node'])) {

    $variables['classes_array'][] = 'node-full';

  }

}



/**

 * Preprocess variables for region.tpl.php

 *

 * @param $variables

 *   An array of variables to pass to the theme template.

 * @param $hook

 *   The name of the template being rendered ("region" in this case.)

 */

function framework_preprocess_region(&$variables, $hook) {

  // Use a bare template for the content region.

  if ($variables['region'] == 'content') {

    $variables['theme_hook_suggestions'][] = 'region__bare';

  }

}



/**

 * Override or insert variables into the block templates.

 *

 * @param $variables

 *   An array of variables to pass to the theme template.

 * @param $hook

 *   The name of the template being rendered ("block" in this case.)

 */

function framework_preprocess_block(&$variables, $hook) {

  // Use a bare template for the page's main content.

  if ($variables['block_html_id'] == 'block-system-main') {

    $variables['theme_hook_suggestions'][] = 'block__bare';

  }

  $variables['title_attributes_array']['class'][] = 'block-title';

}



/**

 * Override or insert variables into the block templates.

 *

 * @param $variables

 *   An array of variables to pass to the theme template.

 * @param $hook

 *   The name of the template being rendered ("block" in this case.)

 */

function framework_process_block(&$variables, $hook) {

  // Drupal 7 should use a $title variable instead of $block->subject.

  $variables['title'] = $variables['block']->subject;

}



/**

 * Changes the search form to use the "search" input element of HTML5.

 */

function framework_preprocess_search_block_form(&$vars) {

  $vars['search_form'] = str_replace('type="text"', 'type="search"', $vars['search_form']);

}

/**

 * Implements hook_preprocess_page().

 */

function framework_preprocess_page(&$vars) {

	if (theme_get_setting('url_to_corporate_site')) {

		$vars['to_corporate_site'] = '<a href="'.theme_get_setting('url_to_corporate_site').'" title="Corporate Site" id="page-logo-link">Take our Virtual Tour</a>';

	} else {

		$vars['to_corporate_site'] = false;

	}

	

	if (isset($vars['node']->type)) {

		$vars['theme_hook_suggestions'][] = 'page__' . $vars['node']->type;

	}

}



/*

function framework_links($variables) {   

	if (array_key_exists('id', $variables['attributes']) && $variables['attributes']['id'] == 'main-menu-links') {       

		$pid = variable_get('menu_main_links_source', 'main-menu');     

		$tree = menu_tree($pid);     

		return drupal_render($tree);   

	}   

	return theme_links($variables); 

}



function framework_menu_item($link, $has_children, $menu = '', $in_active_trail = FALSE, $extra_class = NULL) {  

	$class = ($menu ? 'expanded' : ($has_children ? 'collapsed' : 'leaf'));  

	if (!empty($extra_class))    

		$class .= ' '. $extra_class;  

	if ($in_active_trail)    

		$class .= ' active-trail';  

	$class .= ' ' . preg_replace('/[^a-zA-Z0-9]/', '', strtolower(strip_tags($link)));  

	return '<li class="'. $class .'"><span class="bg">'. $link . $menu ."</span></li>\n";

}



function framework_menu_link(array $variables) {

	$element = $variables['element'];    

	$sub_menu = '';  

	if ($element['#below']) {    

		$sub_menu = drupal_render($element['#below']);  

	}  

	$output = l($element['#title'], $element['#href'], $element['#localized_options']);  

	return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";

}

*/



function framework_menu_item_link($link) {

  $link['title'] = 

   '<span class="classname">'.

    (isset($link['localized_options']['html']) && $link['localized_options']['html']

    ?

    $link['title']

    :

    check_plain($link['title'])).

   '</span>';

  $link['localized_options']['html'] = TRUE;

  return theme_menu_item_link($link);

}