




<!DOCTYPE html>
<html lang="en" class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>angular-sails/angular-sails.js at master · janpantel/angular-sails · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="janpantel/angular-sails" name="twitter:title" /><meta content="angular-sails - An angular module for using the sails socket.io api" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/1828275?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/1828275?v=2&amp;s=400" property="og:image" /><meta content="janpantel/angular-sails" property="og:title" /><meta content="https://github.com/janpantel/angular-sails" property="og:url" /><meta content="angular-sails - An angular module for using the sails socket.io api" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="A2D4273B:5339:287AADE:53E297DF" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="B6adf7bKv50yghtqbPdN7pPNx/97DHubeiFbn74USdNOLdqVDI5DEOs3kdt+cWj5/dFezo2TfuO8D7tzYrugFg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-f38c27913e0b514000d08540798e55d5376dc1f6.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-181eb16ad2ebd99c14de42b70fd97308e8484c5c.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="e60a8ad570c69d29d6e5236c79719575">

      
  <meta name="description" content="angular-sails - An angular module for using the sails socket.io api">


  <meta content="1828275" name="octolytics-dimension-user_id" /><meta content="janpantel" name="octolytics-dimension-user_login" /><meta content="12803627" name="octolytics-dimension-repository_id" /><meta content="janpantel/angular-sails" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="12803627" name="octolytics-dimension-repository_network_root_id" /><meta content="janpantel/angular-sails" name="octolytics-dimension-repository_network_root_nwo" />

  <link href="https://github.com/janpantel/angular-sails/commits/master.atom" rel="alternate" title="Recent Commits to angular-sails:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production  vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fjanpantel%2Fangular-sails%2Fblob%2Fmaster%2Fdist%2Fangular-sails.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
          <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
    data-repo="janpantel/angular-sails"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="janpantel/angular-sails">

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked">
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global">
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">


  <li>
      <a href="/login?return_to=%2Fjanpantel%2Fangular-sails"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/janpantel/angular-sails/stargazers">
      136
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fjanpantel%2Fangular-sails"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/janpantel/angular-sails/network" class="social-count">
        25
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/janpantel" class="url fn" itemprop="url" rel="author"><span itemprop="title">janpantel</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/janpantel/angular-sails" class="js-current-repository js-repo-home-link">angular-sails</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/janpantel/angular-sails/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/janpantel/angular-sails" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /janpantel/angular-sails">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/janpantel/angular-sails/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /janpantel/angular-sails/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/janpantel/angular-sails/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /janpantel/angular-sails/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/janpantel/angular-sails/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /janpantel/angular-sails/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/janpantel/angular-sails/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /janpantel/angular-sails/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/janpantel/angular-sails.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/janpantel/angular-sails.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/janpantel/angular-sails" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/janpantel/angular-sails" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>



                <a href="/janpantel/angular-sails/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download janpantel/angular-sails as a zip file"
                   title="Download janpantel/angular-sails as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/janpantel/angular-sails/blob/97f37bca36510682cac4d2c150861ec86aec5d89/dist/angular-sails.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:3765fa4977760ef352125b7d801f3488 -->

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janpantel/angular-sails/blob/interceptors/dist/angular-sails.js"
                 data-name="interceptors"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="interceptors">interceptors</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janpantel/angular-sails/blob/master/dist/angular-sails.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janpantel/angular-sails/tree/1.0.4/dist/angular-sails.js"
                 data-name="1.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.4">1.0.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janpantel/angular-sails/tree/1.0.3/dist/angular-sails.js"
                 data-name="1.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.3">1.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janpantel/angular-sails/tree/1.0.2/dist/angular-sails.js"
                 data-name="1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.2">1.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janpantel/angular-sails/tree/1.0.1/dist/angular-sails.js"
                 data-name="1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.1">1.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janpantel/angular-sails/tree/1.0.0/dist/angular-sails.js"
                 data-name="1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.0">1.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janpantel/angular-sails/tree/0.2.1/dist/angular-sails.js"
                 data-name="0.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.1">0.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janpantel/angular-sails/tree/0.2.0/dist/angular-sails.js"
                 data-name="0.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.0">0.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janpantel/angular-sails/tree/0.1.3/dist/angular-sails.js"
                 data-name="0.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.3">0.1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janpantel/angular-sails/tree/0.1.2/dist/angular-sails.js"
                 data-name="0.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.2">0.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janpantel/angular-sails/tree/0.1.1/dist/angular-sails.js"
                 data-name="0.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.1">0.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janpantel/angular-sails/tree/0.1.0/dist/angular-sails.js"
                 data-name="0.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.0">0.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janpantel/angular-sails/tree/0.0.3/dist/angular-sails.js"
                 data-name="0.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.0.3">0.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janpantel/angular-sails/tree/0.0.2/dist/angular-sails.js"
                 data-name="0.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.0.2">0.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janpantel/angular-sails/tree/0.0.1/dist/angular-sails.js"
                 data-name="0.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.0.1">0.0.1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/janpantel/angular-sails/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="dist/angular-sails.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/janpantel/angular-sails" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">angular-sails</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/janpantel/angular-sails/tree/master/dist" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">dist</span></a></span><span class="separator"> / </span><strong class="final-path">angular-sails.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="Jan-Oliver Pantel" class="main-avatar" data-user="1828275" height="24" src="https://avatars2.githubusercontent.com/u/1828275?v=2&amp;s=48" width="24" />
      <span class="author"><a href="/janpantel" rel="author">janpantel</a></span>
      <time datetime="2014-03-28T10:10:50+01:00" is="relative-time">March 28, 2014</time>
      <div class="commit-title">
          <a href="/janpantel/angular-sails/commit/0f54848c17d333cf3cdcd1d60aa9f8f4baf0fba9" class="message" data-pjax="true" title="fix(promise): fix succes and error chanining">fix(promise): fix succes and error chanining</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong>  contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Jan-Oliver Pantel" data-user="1828275" height="24" src="https://avatars2.githubusercontent.com/u/1828275?v=2&amp;s=48" width="24" />
            <a href="/janpantel">janpantel</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>78 lines (70 sloc)</span>
          <span class="meta-divider"></span>
        <span>2.806 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/janpantel/angular-sails/raw/master/dist/angular-sails.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/janpantel/angular-sails/blame/master/dist/angular-sails.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/janpantel/angular-sails/commits/master/dist/angular-sails.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->


            <a class="octicon-button disabled tooltipped tooltipped-w" href="#"
               aria-label="You must be signed in to make or propose changes"><span class="octicon octicon-pencil"></span></a>

          <a class="octicon-button danger disabled tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
      

  <div class="blob-wrapper data type-javascript">
       <table class="file-code file-diff tab-size-8 js-file-line-container">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" class="js-line-number">1</span>
<span id="L2" class="js-line-number">2</span>
<span id="L3" class="js-line-number">3</span>
<span id="L4" class="js-line-number">4</span>
<span id="L5" class="js-line-number">5</span>
<span id="L6" class="js-line-number">6</span>
<span id="L7" class="js-line-number">7</span>
<span id="L8" class="js-line-number">8</span>
<span id="L9" class="js-line-number">9</span>
<span id="L10" class="js-line-number">10</span>
<span id="L11" class="js-line-number">11</span>
<span id="L12" class="js-line-number">12</span>
<span id="L13" class="js-line-number">13</span>
<span id="L14" class="js-line-number">14</span>
<span id="L15" class="js-line-number">15</span>
<span id="L16" class="js-line-number">16</span>
<span id="L17" class="js-line-number">17</span>
<span id="L18" class="js-line-number">18</span>
<span id="L19" class="js-line-number">19</span>
<span id="L20" class="js-line-number">20</span>
<span id="L21" class="js-line-number">21</span>
<span id="L22" class="js-line-number">22</span>
<span id="L23" class="js-line-number">23</span>
<span id="L24" class="js-line-number">24</span>
<span id="L25" class="js-line-number">25</span>
<span id="L26" class="js-line-number">26</span>
<span id="L27" class="js-line-number">27</span>
<span id="L28" class="js-line-number">28</span>
<span id="L29" class="js-line-number">29</span>
<span id="L30" class="js-line-number">30</span>
<span id="L31" class="js-line-number">31</span>
<span id="L32" class="js-line-number">32</span>
<span id="L33" class="js-line-number">33</span>
<span id="L34" class="js-line-number">34</span>
<span id="L35" class="js-line-number">35</span>
<span id="L36" class="js-line-number">36</span>
<span id="L37" class="js-line-number">37</span>
<span id="L38" class="js-line-number">38</span>
<span id="L39" class="js-line-number">39</span>
<span id="L40" class="js-line-number">40</span>
<span id="L41" class="js-line-number">41</span>
<span id="L42" class="js-line-number">42</span>
<span id="L43" class="js-line-number">43</span>
<span id="L44" class="js-line-number">44</span>
<span id="L45" class="js-line-number">45</span>
<span id="L46" class="js-line-number">46</span>
<span id="L47" class="js-line-number">47</span>
<span id="L48" class="js-line-number">48</span>
<span id="L49" class="js-line-number">49</span>
<span id="L50" class="js-line-number">50</span>
<span id="L51" class="js-line-number">51</span>
<span id="L52" class="js-line-number">52</span>
<span id="L53" class="js-line-number">53</span>
<span id="L54" class="js-line-number">54</span>
<span id="L55" class="js-line-number">55</span>
<span id="L56" class="js-line-number">56</span>
<span id="L57" class="js-line-number">57</span>
<span id="L58" class="js-line-number">58</span>
<span id="L59" class="js-line-number">59</span>
<span id="L60" class="js-line-number">60</span>
<span id="L61" class="js-line-number">61</span>
<span id="L62" class="js-line-number">62</span>
<span id="L63" class="js-line-number">63</span>
<span id="L64" class="js-line-number">64</span>
<span id="L65" class="js-line-number">65</span>
<span id="L66" class="js-line-number">66</span>
<span id="L67" class="js-line-number">67</span>
<span id="L68" class="js-line-number">68</span>
<span id="L69" class="js-line-number">69</span>
<span id="L70" class="js-line-number">70</span>
<span id="L71" class="js-line-number">71</span>
<span id="L72" class="js-line-number">72</span>
<span id="L73" class="js-line-number">73</span>
<span id="L74" class="js-line-number">74</span>
<span id="L75" class="js-line-number">75</span>
<span id="L76" class="js-line-number">76</span>
<span id="L77" class="js-line-number">77</span>
<span id="L78" class="js-line-number">78</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line js-file-line' id='LC1'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">angular</span><span class="p">,</span> <span class="nx">io</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC2'><span class="s1">&#39;use strict&#39;</span><span class="cm">/*global angular */</span></div><div class='line js-file-line' id='LC3'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;ngSails&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;ng&#39;</span><span class="p">]);</span></div><div class='line js-file-line' id='LC4'><br></div><div class='line js-file-line' id='LC5'><span class="cm">/*jslint sloppy:true*/</span></div><div class='line js-file-line' id='LC6'><span class="cm">/*global angular, io */</span></div><div class='line js-file-line' id='LC7'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;ngSails&#39;</span><span class="p">).</span><span class="nx">provider</span><span class="p">(</span><span class="s1">&#39;$sails&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line js-file-line' id='LC8'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">provider</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line js-file-line' id='LC9'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">httpVerbs</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;get&#39;</span><span class="p">,</span> <span class="s1">&#39;post&#39;</span><span class="p">,</span> <span class="s1">&#39;put&#39;</span><span class="p">,</span> <span class="s1">&#39;delete&#39;</span><span class="p">],</span></div><div class='line js-file-line' id='LC10'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">eventNames</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;on&#39;</span><span class="p">,</span> <span class="s1">&#39;once&#39;</span><span class="p">];</span></div><div class='line js-file-line' id='LC11'><br></div><div class='line js-file-line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line js-file-line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">interceptors</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line js-file-line' id='LC14'><br></div><div class='line js-file-line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$get</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;$q&#39;</span><span class="p">,</span> <span class="s1">&#39;$timeout&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">$q</span><span class="p">,</span> <span class="nx">$timeout</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">socket</span> <span class="o">=</span> <span class="nx">io</span><span class="p">.</span><span class="nx">connect</span><span class="p">(</span><span class="nx">provider</span><span class="p">.</span><span class="nx">url</span><span class="p">),</span></div><div class='line js-file-line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">defer</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line js-file-line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">deferred</span> <span class="o">=</span> <span class="nx">$q</span><span class="p">.</span><span class="nx">defer</span><span class="p">(),</span></div><div class='line js-file-line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">promise</span> <span class="o">=</span> <span class="nx">deferred</span><span class="p">.</span><span class="nx">promise</span><span class="p">;</span></div><div class='line js-file-line' id='LC20'><br></div><div class='line js-file-line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">promise</span><span class="p">.</span><span class="nx">success</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">promise</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span><span class="nx">fn</span><span class="p">);</span></div><div class='line js-file-line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">promise</span><span class="p">;</span></div><div class='line js-file-line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line js-file-line' id='LC25'><br></div><div class='line js-file-line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">promise</span><span class="p">.</span><span class="nx">error</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">promise</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">fn</span><span class="p">);</span></div><div class='line js-file-line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">promise</span><span class="p">;</span></div><div class='line js-file-line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line js-file-line' id='LC30'><br></div><div class='line js-file-line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">deferred</span><span class="p">;</span></div><div class='line js-file-line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line js-file-line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resolveOrReject</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">deferred</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Make sure what is passed is an object that has a status and if that status is no 2xx, reject.</span></div><div class='line js-file-line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">data</span> <span class="o">&amp;&amp;</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">status</span> <span class="o">&amp;&amp;</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">status</span> <span class="o">/</span> <span class="mi">100</span><span class="p">)</span> <span class="o">!==</span> <span class="mi">2</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">deferred</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span></div><div class='line js-file-line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line js-file-line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">deferred</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span></div><div class='line js-file-line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line js-file-line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angularify</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">cb</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$timeout</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line js-file-line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cb</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span></div><div class='line js-file-line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line js-file-line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line js-file-line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">promisify</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">methodName</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">socket</span><span class="p">[</span><span class="s1">&#39;legacy_&#39;</span> <span class="o">+</span> <span class="nx">methodName</span><span class="p">]</span> <span class="o">=</span> <span class="nx">socket</span><span class="p">[</span><span class="nx">methodName</span><span class="p">];</span></div><div class='line js-file-line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">socket</span><span class="p">[</span><span class="nx">methodName</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">cb</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">deferred</span> <span class="o">=</span> <span class="nx">defer</span><span class="p">();</span></div><div class='line js-file-line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cb</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">data</span><span class="p">))</span> <span class="p">{</span></div><div class='line js-file-line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cb</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span></div><div class='line js-file-line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line js-file-line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">deferred</span><span class="p">.</span><span class="nx">promise</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span><span class="nx">cb</span><span class="p">);</span></div><div class='line js-file-line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">socket</span><span class="p">[</span><span class="s1">&#39;legacy_&#39;</span> <span class="o">+</span> <span class="nx">methodName</span><span class="p">](</span><span class="nx">url</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">result</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resolveOrReject</span><span class="p">(</span><span class="nx">deferred</span><span class="p">,</span> <span class="nx">result</span><span class="p">);</span></div><div class='line js-file-line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line js-file-line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">deferred</span><span class="p">.</span><span class="nx">promise</span><span class="p">;</span></div><div class='line js-file-line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line js-file-line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line js-file-line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">wrapEvent</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">eventName</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">socket</span><span class="p">[</span><span class="s1">&#39;legacy_&#39;</span> <span class="o">+</span> <span class="nx">eventName</span><span class="p">]</span> <span class="o">=</span> <span class="nx">socket</span><span class="p">[</span><span class="nx">eventName</span><span class="p">];</span></div><div class='line js-file-line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">socket</span><span class="p">[</span><span class="nx">eventName</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">cb</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cb</span> <span class="o">!==</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">cb</span><span class="p">))</span> <span class="p">{</span></div><div class='line js-file-line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">socket</span><span class="p">[</span><span class="s1">&#39;legacy_&#39;</span> <span class="o">+</span> <span class="nx">eventName</span><span class="p">](</span><span class="nx">event</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">result</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angularify</span><span class="p">(</span><span class="nx">cb</span><span class="p">,</span> <span class="nx">result</span><span class="p">);</span></div><div class='line js-file-line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line js-file-line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line js-file-line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line js-file-line' id='LC71'><br></div><div class='line js-file-line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">httpVerbs</span><span class="p">,</span> <span class="nx">promisify</span><span class="p">);</span></div><div class='line js-file-line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">eventNames</span><span class="p">,</span> <span class="nx">wrapEvent</span><span class="p">);</span></div><div class='line js-file-line' id='LC74'><br></div><div class='line js-file-line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">socket</span><span class="p">;</span></div><div class='line js-file-line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}];</span></div><div class='line js-file-line' id='LC77'><span class="p">});</span></div><div class='line js-file-line' id='LC78'><span class="p">}(</span><span class="nx">angular</span><span class="p">,</span> <span class="nx">io</span><span class="p">));</span></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.06918s from github-fe119-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-12d5fda141e78e513749dddbc56445fe172cbd9a.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-bab69aad3525319f567c3a8bbc8734062ba4765e.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

