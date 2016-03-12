




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>jQuery-Parallax/scripts/jquery.scrollTo-1.4.2-min.js at master · IanLunn/jQuery-Parallax · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="IanLunn/jQuery-Parallax" name="twitter:title" /><meta content="jQuery-Parallax - Used to recreate the Nike Better World parallax effect" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/694641?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/694641?s=400" property="og:image" /><meta content="IanLunn/jQuery-Parallax" property="og:title" /><meta content="https://github.com/IanLunn/jQuery-Parallax" property="og:url" /><meta content="jQuery-Parallax - Used to recreate the Nike Better World parallax effect" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="60FF159E:6FEE:112670:53B2040A" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />


    <meta content="authenticity_token" name="csrf-param" />
<meta content="hrcgynbyMoWyMXahiWc/b6GTSbwEQHQ4uZNPUw6CyxhNm/6I9LNlkCdqksbHN131B6hr1yp8Vp+Az7di0Sp34g==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-76cfa95545237991efe33d52ac7cc4b62427a9ac.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-70f37a02c9963d19aa930ee51a4c9860f1047150.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="f3786035223edf903b397bdc425af475">

      
  <meta name="description" content="jQuery-Parallax - Used to recreate the Nike Better World parallax effect" />


  <meta content="694641" name="octolytics-dimension-user_id" /><meta content="IanLunn" name="octolytics-dimension-user_login" /><meta content="2606078" name="octolytics-dimension-repository_id" /><meta content="IanLunn/jQuery-Parallax" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2606078" name="octolytics-dimension-repository_network_root_id" /><meta content="IanLunn/jQuery-Parallax" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/IanLunn/jQuery-Parallax/commits/master.atom" rel="alternate" title="Recent Commits to jQuery-Parallax:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2FIanLunn%2FjQuery-Parallax%2Fblob%2Fmaster%2Fscripts%2Fjquery.scrollTo-1.4.2-min.js">Sign in</a>
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
    
    
      data-repo="IanLunn/jQuery-Parallax"
      data-branch="master"
      data-sha="28c9a1c7211b5e7777ef2552722f4bdf605cdefb"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="IanLunn/jQuery-Parallax" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
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
      <a href="/login?return_to=%2FIanLunn%2FjQuery-Parallax"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/IanLunn/jQuery-Parallax/stargazers">
      1,137
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2FIanLunn%2FjQuery-Parallax"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/IanLunn/jQuery-Parallax/network" class="social-count">
        376
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/IanLunn" class="url fn" itemprop="url" rel="author"><span itemprop="title">IanLunn</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/IanLunn/jQuery-Parallax" class="js-current-repository js-repo-home-link">jQuery-Parallax</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/IanLunn/jQuery-Parallax" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /IanLunn/jQuery-Parallax">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/IanLunn/jQuery-Parallax/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /IanLunn/jQuery-Parallax/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>7</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/IanLunn/jQuery-Parallax/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /IanLunn/jQuery-Parallax/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/IanLunn/jQuery-Parallax/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /IanLunn/jQuery-Parallax/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/IanLunn/jQuery-Parallax/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /IanLunn/jQuery-Parallax/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/IanLunn/jQuery-Parallax/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /IanLunn/jQuery-Parallax/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
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
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/IanLunn/jQuery-Parallax.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/IanLunn/jQuery-Parallax.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/IanLunn/jQuery-Parallax" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/IanLunn/jQuery-Parallax" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
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


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save IanLunn/jQuery-Parallax to your computer and use it in GitHub Desktop." aria-label="Save IanLunn/jQuery-Parallax to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/IanLunn/jQuery-Parallax/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download IanLunn/jQuery-Parallax as a zip file"
                   title="Download IanLunn/jQuery-Parallax as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/IanLunn/jQuery-Parallax/blob/bdcb08f5b6936d1920146ba7973112c3341eba8c/scripts/jquery.scrollTo-1.4.2-min.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:90bd7afb5deb9bb8d21297dfdbf8d16c -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

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
        <span class="octicon octicon-x js-menu-close"></span>
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


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/IanLunn/jQuery-Parallax/blob/master/scripts/jquery.scrollTo-1.4.2-min.js"
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


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/IanLunn/jQuery-Parallax/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="scripts/jquery.scrollTo-1.4.2-min.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/IanLunn/jQuery-Parallax" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jQuery-Parallax</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/IanLunn/jQuery-Parallax/tree/master/scripts" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">scripts</span></a></span><span class="separator"> / </span><strong class="final-path">jquery.scrollTo-1.4.2-min.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="Ian Lunn" class="main-avatar js-avatar" data-user="694641" height="24" src="https://avatars1.githubusercontent.com/u/694641?s=140" width="24" />
      <span class="author"><a href="/IanLunn" rel="author">IanLunn</a></span>
      <time datetime="2011-10-19T14:16:08+01:00" is="relative-time">October 19, 2011</time>
      <div class="commit-title">
          <a href="/IanLunn/jQuery-Parallax/commit/0968752d419d1901a7704d5b352fd35e1f5186bf" class="message" data-pjax="true" title="jQuery Parallax 1.1 Commit">jQuery Parallax 1.1 Commit</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong>  contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Ian Lunn" class=" js-avatar" data-user="694641" height="24" src="https://avatars1.githubusercontent.com/u/694641?s=140" width="24" />
            <a href="/IanLunn">IanLunn</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">executable file</span>
        <span class="meta-divider"></span>
          <span>11 lines (11 sloc)</span>
          <span class="meta-divider"></span>
        <span>2.262 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/IanLunn/jQuery-Parallax/raw/master/scripts/jquery.scrollTo-1.4.2-min.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/IanLunn/jQuery-Parallax/blame/master/scripts/jquery.scrollTo-1.4.2-min.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/IanLunn/jQuery-Parallax/commits/master/scripts/jquery.scrollTo-1.4.2-min.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript js-blob-data">
       <table class="file-code file-diff tab-size-8">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * jQuery.ScrollTo - Easy element scrolling using jQuery.</span></div><div class='line' id='LC3'><span class="cm"> * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com</span></div><div class='line' id='LC4'><span class="cm"> * Dual licensed under MIT and GPL.</span></div><div class='line' id='LC5'><span class="cm"> * Date: 5/25/2009</span></div><div class='line' id='LC6'><span class="cm"> * @author Ariel Flesler</span></div><div class='line' id='LC7'><span class="cm"> * @version 1.4.2</span></div><div class='line' id='LC8'><span class="cm"> *</span></div><div class='line' id='LC9'><span class="cm"> * http://flesler.blogspot.com/2007/10/jqueryscrollto.html</span></div><div class='line' id='LC10'><span class="cm"> */</span></div><div class='line' id='LC11'><span class="p">;(</span><span class="kd">function</span><span class="p">(</span><span class="nx">d</span><span class="p">){</span><span class="kd">var</span> <span class="nx">k</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">scrollTo</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">e</span><span class="p">){</span><span class="nx">d</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">scrollTo</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">e</span><span class="p">)};</span><span class="nx">k</span><span class="p">.</span><span class="nx">defaults</span><span class="o">=</span><span class="p">{</span><span class="nx">axis</span><span class="o">:</span><span class="s1">&#39;xy&#39;</span><span class="p">,</span><span class="nx">duration</span><span class="o">:</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">jquery</span><span class="p">)</span><span class="o">&gt;=</span><span class="mf">1.3</span><span class="o">?</span><span class="mi">0</span><span class="o">:</span><span class="mi">1</span><span class="p">};</span><span class="nx">k</span><span class="p">.</span><span class="nb">window</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">d</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">_scrollable</span><span class="p">()};</span><span class="nx">d</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">_scrollable</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="k">this</span><span class="p">,</span><span class="nx">i</span><span class="o">=!</span><span class="nx">a</span><span class="p">.</span><span class="nx">nodeName</span><span class="o">||</span><span class="nx">d</span><span class="p">.</span><span class="nx">inArray</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),[</span><span class="s1">&#39;iframe&#39;</span><span class="p">,</span><span class="s1">&#39;#document&#39;</span><span class="p">,</span><span class="s1">&#39;html&#39;</span><span class="p">,</span><span class="s1">&#39;body&#39;</span><span class="p">])</span><span class="o">!=-</span><span class="mi">1</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">i</span><span class="p">)</span><span class="k">return</span> <span class="nx">a</span><span class="p">;</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">contentWindow</span><span class="o">||</span><span class="nx">a</span><span class="p">).</span><span class="nb">document</span><span class="o">||</span><span class="nx">a</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="o">||</span><span class="nx">a</span><span class="p">;</span><span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">safari</span><span class="o">||</span><span class="nx">e</span><span class="p">.</span><span class="nx">compatMode</span><span class="o">==</span><span class="s1">&#39;BackCompat&#39;</span><span class="o">?</span><span class="nx">e</span><span class="p">.</span><span class="nx">body</span><span class="o">:</span><span class="nx">e</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">})};</span><span class="nx">d</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">scrollTo</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span><span class="nx">j</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">j</span><span class="o">==</span><span class="s1">&#39;object&#39;</span><span class="p">){</span><span class="nx">b</span><span class="o">=</span><span class="nx">j</span><span class="p">;</span><span class="nx">j</span><span class="o">=</span><span class="mi">0</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">b</span><span class="o">==</span><span class="s1">&#39;function&#39;</span><span class="p">)</span><span class="nx">b</span><span class="o">=</span><span class="p">{</span><span class="nx">onAfter</span><span class="o">:</span><span class="nx">b</span><span class="p">};</span><span class="k">if</span><span class="p">(</span><span class="nx">n</span><span class="o">==</span><span class="s1">&#39;max&#39;</span><span class="p">)</span><span class="nx">n</span><span class="o">=</span><span class="mi">9</span><span class="nx">e9</span><span class="p">;</span><span class="nx">b</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span><span class="nx">k</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span><span class="nx">b</span><span class="p">);</span><span class="nx">j</span><span class="o">=</span><span class="nx">j</span><span class="o">||</span><span class="nx">b</span><span class="p">.</span><span class="nx">speed</span><span class="o">||</span><span class="nx">b</span><span class="p">.</span><span class="nx">duration</span><span class="p">;</span><span class="nx">b</span><span class="p">.</span><span class="nx">queue</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">queue</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">.</span><span class="nx">axis</span><span class="p">.</span><span class="nx">length</span><span class="o">&gt;</span><span class="mi">1</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">queue</span><span class="p">)</span><span class="nx">j</span><span class="o">/=</span><span class="mi">2</span><span class="p">;</span><span class="nx">b</span><span class="p">.</span><span class="nx">offset</span><span class="o">=</span><span class="nx">p</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">offset</span><span class="p">);</span><span class="nx">b</span><span class="p">.</span><span class="nx">over</span><span class="o">=</span><span class="nx">p</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">over</span><span class="p">);</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_scrollable</span><span class="p">().</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">q</span><span class="o">=</span><span class="k">this</span><span class="p">,</span><span class="nx">r</span><span class="o">=</span><span class="nx">d</span><span class="p">(</span><span class="nx">q</span><span class="p">),</span><span class="nx">f</span><span class="o">=</span><span class="nx">n</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="p">{},</span><span class="nx">u</span><span class="o">=</span><span class="nx">r</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;html,body&#39;</span><span class="p">);</span><span class="k">switch</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">f</span><span class="p">){</span><span class="k">case</span><span class="s1">&#39;number&#39;</span><span class="o">:</span><span class="k">case</span><span class="s1">&#39;string&#39;</span><span class="o">:</span><span class="k">if</span><span class="p">(</span><span class="sr">/^([+-]=)?\d+(\.\d+)?(px|%)?$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">f</span><span class="p">)){</span><span class="nx">f</span><span class="o">=</span><span class="nx">p</span><span class="p">(</span><span class="nx">f</span><span class="p">);</span><span class="k">break</span><span class="p">}</span><span class="nx">f</span><span class="o">=</span><span class="nx">d</span><span class="p">(</span><span class="nx">f</span><span class="p">,</span><span class="k">this</span><span class="p">);</span><span class="k">case</span><span class="s1">&#39;object&#39;</span><span class="o">:</span><span class="k">if</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">is</span><span class="o">||</span><span class="nx">f</span><span class="p">.</span><span class="nx">style</span><span class="p">)</span><span class="nx">s</span><span class="o">=</span><span class="p">(</span><span class="nx">f</span><span class="o">=</span><span class="nx">d</span><span class="p">(</span><span class="nx">f</span><span class="p">)).</span><span class="nx">offset</span><span class="p">()}</span><span class="nx">d</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">axis</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">),</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">i</span><span class="p">){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="nx">i</span><span class="o">==</span><span class="s1">&#39;x&#39;</span><span class="o">?</span><span class="s1">&#39;Left&#39;</span><span class="o">:</span><span class="s1">&#39;Top&#39;</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span><span class="nx">c</span><span class="o">=</span><span class="s1">&#39;scroll&#39;</span><span class="o">+</span><span class="nx">e</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="nx">q</span><span class="p">[</span><span class="nx">c</span><span class="p">],</span><span class="nx">m</span><span class="o">=</span><span class="nx">k</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">q</span><span class="p">,</span><span class="nx">i</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">s</span><span class="p">){</span><span class="nx">g</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">=</span><span class="nx">s</span><span class="p">[</span><span class="nx">h</span><span class="p">]</span><span class="o">+</span><span class="p">(</span><span class="nx">u</span><span class="o">?</span><span class="mi">0</span><span class="o">:</span><span class="nx">l</span><span class="o">-</span><span class="nx">r</span><span class="p">.</span><span class="nx">offset</span><span class="p">()[</span><span class="nx">h</span><span class="p">]);</span><span class="k">if</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">margin</span><span class="p">){</span><span class="nx">g</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">-=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;margin&#39;</span><span class="o">+</span><span class="nx">e</span><span class="p">))</span><span class="o">||</span><span class="mi">0</span><span class="p">;</span><span class="nx">g</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">-=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;border&#39;</span><span class="o">+</span><span class="nx">e</span><span class="o">+</span><span class="s1">&#39;Width&#39;</span><span class="p">))</span><span class="o">||</span><span class="mi">0</span><span class="p">}</span><span class="nx">g</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">+=</span><span class="nx">b</span><span class="p">.</span><span class="nx">offset</span><span class="p">[</span><span class="nx">h</span><span class="p">]</span><span class="o">||</span><span class="mi">0</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">over</span><span class="p">[</span><span class="nx">h</span><span class="p">])</span><span class="nx">g</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">+=</span><span class="nx">f</span><span class="p">[</span><span class="nx">i</span><span class="o">==</span><span class="s1">&#39;x&#39;</span><span class="o">?</span><span class="s1">&#39;width&#39;</span><span class="o">:</span><span class="s1">&#39;height&#39;</span><span class="p">]()</span><span class="o">*</span><span class="nx">b</span><span class="p">.</span><span class="nx">over</span><span class="p">[</span><span class="nx">h</span><span class="p">]}</span><span class="k">else</span><span class="p">{</span><span class="kd">var</span> <span class="nx">o</span><span class="o">=</span><span class="nx">f</span><span class="p">[</span><span class="nx">h</span><span class="p">];</span><span class="nx">g</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">slice</span><span class="o">&amp;&amp;</span><span class="nx">o</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span><span class="o">==</span><span class="s1">&#39;%&#39;</span><span class="o">?</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span><span class="o">/</span><span class="mi">100</span><span class="o">*</span><span class="nx">m</span><span class="o">:</span><span class="nx">o</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="sr">/^\d+$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">g</span><span class="p">[</span><span class="nx">c</span><span class="p">]))</span><span class="nx">g</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">=</span><span class="nx">g</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">&lt;=</span><span class="mi">0</span><span class="o">?</span><span class="mi">0</span><span class="o">:</span><span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">g</span><span class="p">[</span><span class="nx">c</span><span class="p">],</span><span class="nx">m</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">.</span><span class="nx">queue</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">l</span><span class="o">!=</span><span class="nx">g</span><span class="p">[</span><span class="nx">c</span><span class="p">])</span><span class="nx">t</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">onAfterFirst</span><span class="p">);</span><span class="k">delete</span> <span class="nx">g</span><span class="p">[</span><span class="nx">c</span><span class="p">]}});</span><span class="nx">t</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">onAfter</span><span class="p">);</span><span class="kd">function</span> <span class="nx">t</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">r</span><span class="p">.</span><span class="nx">animate</span><span class="p">(</span><span class="nx">g</span><span class="p">,</span><span class="nx">j</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">easing</span><span class="p">,</span><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="kd">function</span><span class="p">(){</span><span class="nx">a</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">n</span><span class="p">,</span><span class="nx">b</span><span class="p">)})}}).</span><span class="nx">end</span><span class="p">()};</span><span class="nx">k</span><span class="p">.</span><span class="nx">max</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">i</span><span class="p">){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="nx">i</span><span class="o">==</span><span class="s1">&#39;x&#39;</span><span class="o">?</span><span class="s1">&#39;Width&#39;</span><span class="o">:</span><span class="s1">&#39;Height&#39;</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="s1">&#39;scroll&#39;</span><span class="o">+</span><span class="nx">e</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">d</span><span class="p">(</span><span class="nx">a</span><span class="p">).</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;html,body&#39;</span><span class="p">))</span><span class="k">return</span> <span class="nx">a</span><span class="p">[</span><span class="nx">h</span><span class="p">]</span><span class="o">-</span><span class="nx">d</span><span class="p">(</span><span class="nx">a</span><span class="p">)[</span><span class="nx">e</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()]();</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="s1">&#39;client&#39;</span><span class="o">+</span><span class="nx">e</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span><span class="nx">m</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">.</span><span class="nx">body</span><span class="p">;</span><span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">l</span><span class="p">[</span><span class="nx">h</span><span class="p">],</span><span class="nx">m</span><span class="p">[</span><span class="nx">h</span><span class="p">])</span><span class="o">-</span><span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">l</span><span class="p">[</span><span class="nx">c</span><span class="p">],</span><span class="nx">m</span><span class="p">[</span><span class="nx">c</span><span class="p">])};</span><span class="kd">function</span> <span class="nx">p</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="k">typeof</span> <span class="nx">a</span><span class="o">==</span><span class="s1">&#39;object&#39;</span><span class="o">?</span><span class="nx">a</span><span class="o">:</span><span class="p">{</span><span class="nx">top</span><span class="o">:</span><span class="nx">a</span><span class="p">,</span><span class="nx">left</span><span class="o">:</span><span class="nx">a</span><span class="p">}}})(</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
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

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.02767s from github-fe117-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
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


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-87e1861095e3a50a45990ef150813264dab0ab52.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-b51fdb562e7e2290ce4e74928029e96bacd58bcd.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

