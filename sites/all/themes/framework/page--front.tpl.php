	<div id="container-wrapper">
	<div id="container" class="clearfix">
            <div id="skip-link">
			<a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
			<?php if ($main_menu): ?>
			  <a href="#navigation" class="element-invisible element-focusable"><?php print t('Skip to navigation'); ?></a>
			<?php endif; ?>
		  </div>
          <div id="header-wrapper">
		  <header id="header" role="banner" class="clearfix">
			<?php if ($logo): ?>
			<div id="page-logo"> 
			<?php if ($to_corporate_site): print $to_corporate_site; endif;?>
			<a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" id="logo">
				<img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
			</a>
			</div> 
			<?php endif; ?>
				
			
			<?php if ($main_menu): ?>
			  <nav id="navigation" role="navigation" class="clearfix">
				<?php 
				    print drupal_render(menu_tree_output(menu_tree_all_data(variable_get('menu_main_links_source', 'main-menu'))));
			    ?>
				<div id="phone">
				<?php 
					$block = block_load('block', '5');
					print drupal_render(_block_get_renderable_array(_block_render_blocks(array($block))));	?>
				</div>
			  </nav> <!-- /#navigation -->
			<?php endif; ?>
			<!--<?php if ($breadcrumb): print $breadcrumb; endif;?>-->
		  </header> <!-- /#header -->
          </div>
		<div id="content-wrapper">
			  <section id="main" role="main" class="clearfix">
				<?php print $messages; ?>
				<a id="main-content"></a>
				<?php if ($page['highlighted']): ?><div id="highlighted"><?php print render($page['highlighted']); ?></div><?php endif; ?>
				<?php print render($title_prefix); ?>
				<?php if ($title): ?><h1 class="title" id="page-title"><?php print $title; ?></h1><?php endif; ?>
				<?php print render($title_suffix); ?>
				<?php if (!empty($tabs['#primary'])): ?><div class="tabs-wrapper clearfix"><?php print render($tabs); ?></div><?php endif; ?>
				<?php print render($page['help']); ?>
				<?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
				<?php print render($page['content']); ?>
				<?php 
					$block = block_load('block', '4');
					print drupal_render(_block_get_renderable_array(_block_render_blocks(array($block))));	?>
			  </section> <!-- /#main -->

		  <?php if ($page['sidebar_first']): ?>
			<aside id="sidebar-first" role="complementary" class="sidebar clearfix">
			  <?php print render($page['sidebar_first']); ?>
			</aside>  <!-- /#sidebar-first -->
		  <?php endif; ?>
		</div>
			<!-- /#content-wrapper -->
		  <footer id="footer" role="contentinfo" class="clearfix">
			  <div id="testimonials">  <?php print render($page['testimonials']); ?> </div>
			<nav id="footer-menu-inside">
			<?php 
				if (module_exists('i18n')) {
					$main_menu_tree = i18n_menu_translated_tree(variable_get('menu_main_links_source', 'main-menu'));
				} else {
					$main_menu_tree = menu_tree(variable_get('menu_main_links_source', 'main-menu')); 
				}
				print drupal_render($main_menu_tree);
			?>
			</nav>
			<?php print render($page['footer']) ?>
			<?php print $feed_icons ?>
		  </footer> <!-- /#footer -->

		</div> <!-- /#container -->
</div>
