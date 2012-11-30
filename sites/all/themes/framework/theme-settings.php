<?php

/**
 * Implements hook_form_system_theme_settings_alter().
 *
 * Custom theme settings
 */
function framework_form_system_theme_settings_alter(&$form, &$form_state) {
  
  $form['url_to_corporate_site'] = array(
    '#type' => 'textfield',
    '#title' => t('URL to corporate site'),
    '#default_value' => theme_get_setting('url_to_corporate_site'),
  );

}

