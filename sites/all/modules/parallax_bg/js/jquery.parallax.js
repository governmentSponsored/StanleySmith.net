




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>jQuery-Parallax/scripts/jquery.parallax-1.1.3.js at master · IanLunn/jQuery-Parallax · GitHub</title>
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

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="60FF159E:6FEB:68E69:53B203F5" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />


    <meta content="authenticity_token" name="csrf-param" />
<meta content="6Hfxl6Xm1jpChkDHiOAlFy09BmaaSSCYGiyPtAiRMjbhAZZEYXfca4LnsxwglEPWmqJSK5jhT1I/6m1wjLUCWw==" name="csrf-token" />

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
      <a class="button signin" href="/login?return_to=%2FIanLunn%2FjQuery-Parallax%2Fblob%2Fmaster%2Fscripts%2Fjquery.parallax-1.1.3.js">Sign in</a>
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
          


<a href="/IanLunn/jQuery-Parallax/blob/bdcb08f5b6936d1920146ba7973112c3341eba8c/scripts/jquery.parallax-1.1.3.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:4ceb6eefc7b9f54aa57a89c00dd0e774 -->

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
              <a href="/IanLunn/jQuery-Parallax/blob/master/scripts/jquery.parallax-1.1.3.js"
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
          data-clipboard-text="scripts/jquery.parallax-1.1.3.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/IanLunn/jQuery-Parallax" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jQuery-Parallax</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/IanLunn/jQuery-Parallax/tree/master/scripts" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">scripts</span></a></span><span class="separator"> / </span><strong class="final-path">jquery.parallax-1.1.3.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="Ian Lunn" class="main-avatar js-avatar" data-user="694641" height="24" src="https://avatars1.githubusercontent.com/u/694641?s=140" width="24" />
      <span class="author"><a href="/IanLunn" rel="author">IanLunn</a></span>
      <time datetime="2012-07-12T17:23:37+01:00" is="relative-time">July 12, 2012</time>
      <div class="commit-title">
          <a href="/IanLunn/jQuery-Parallax/commit/86ca1dfb48fc8e3980e413685e07e2137ec4c762" class="message" data-pjax="true" title="Fixes and removed the need for the dreaded &#39;adujster&#39; argument">Fixes and removed the need for the dreaded 'adujster' argument</a>
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
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>70 lines (57 sloc)</span>
          <span class="meta-divider"></span>
        <span>1.77 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/IanLunn/jQuery-Parallax/raw/master/scripts/jquery.parallax-1.1.3.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/IanLunn/jQuery-Parallax/blame/master/scripts/jquery.parallax-1.1.3.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/IanLunn/jQuery-Parallax/commits/master/scripts/jquery.parallax-1.1.3.js" class="minibutton " rel="nofollow">History</a>
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
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm">Plugin: jQuery Parallax</span></div><div class='line' id='LC3'><span class="cm">Version 1.1.3</span></div><div class='line' id='LC4'><span class="cm">Author: Ian Lunn</span></div><div class='line' id='LC5'><span class="cm">Twitter: @IanLunn</span></div><div class='line' id='LC6'><span class="cm">Author URL: http://www.ianlunn.co.uk/</span></div><div class='line' id='LC7'><span class="cm">Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'><span class="cm">Dual licensed under the MIT and GPL licenses:</span></div><div class='line' id='LC10'><span class="cm">http://www.opensource.org/licenses/mit-license.php</span></div><div class='line' id='LC11'><span class="cm">http://www.gnu.org/licenses/gpl.html</span></div><div class='line' id='LC12'><span class="cm">*/</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">$</span> <span class="p">){</span></div><div class='line' id='LC15'>	<span class="kd">var</span> <span class="nx">$window</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">);</span></div><div class='line' id='LC16'>	<span class="kd">var</span> <span class="nx">windowHeight</span> <span class="o">=</span> <span class="nx">$window</span><span class="p">.</span><span class="nx">height</span><span class="p">();</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'>	<span class="nx">$window</span><span class="p">.</span><span class="nx">resize</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC19'>		<span class="nx">windowHeight</span> <span class="o">=</span> <span class="nx">$window</span><span class="p">.</span><span class="nx">height</span><span class="p">();</span></div><div class='line' id='LC20'>	<span class="p">});</span></div><div class='line' id='LC21'><br/></div><div class='line' id='LC22'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">parallax</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">xpos</span><span class="p">,</span> <span class="nx">speedFactor</span><span class="p">,</span> <span class="nx">outerHeight</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC23'>		<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC24'>		<span class="kd">var</span> <span class="nx">getHeight</span><span class="p">;</span></div><div class='line' id='LC25'>		<span class="kd">var</span> <span class="nx">firstTop</span><span class="p">;</span></div><div class='line' id='LC26'>		<span class="kd">var</span> <span class="nx">paddingTop</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'>		<span class="c1">//get the starting position of each element to have parallax applied to it		</span></div><div class='line' id='LC29'>		<span class="nx">$this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC30'>		    <span class="nx">firstTop</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">offset</span><span class="p">().</span><span class="nx">top</span><span class="p">;</span></div><div class='line' id='LC31'>		<span class="p">});</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'>		<span class="k">if</span> <span class="p">(</span><span class="nx">outerHeight</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC34'>			<span class="nx">getHeight</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">jqo</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC35'>				<span class="k">return</span> <span class="nx">jqo</span><span class="p">.</span><span class="nx">outerHeight</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC36'>			<span class="p">};</span></div><div class='line' id='LC37'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC38'>			<span class="nx">getHeight</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">jqo</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC39'>				<span class="k">return</span> <span class="nx">jqo</span><span class="p">.</span><span class="nx">height</span><span class="p">();</span></div><div class='line' id='LC40'>			<span class="p">};</span></div><div class='line' id='LC41'>		<span class="p">}</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>		<span class="c1">// setup defaults if arguments aren&#39;t specified</span></div><div class='line' id='LC44'>		<span class="k">if</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;</span> <span class="mi">1</span> <span class="o">||</span> <span class="nx">xpos</span> <span class="o">===</span> <span class="kc">null</span><span class="p">)</span> <span class="nx">xpos</span> <span class="o">=</span> <span class="s2">&quot;50%&quot;</span><span class="p">;</span></div><div class='line' id='LC45'>		<span class="k">if</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;</span> <span class="mi">2</span> <span class="o">||</span> <span class="nx">speedFactor</span> <span class="o">===</span> <span class="kc">null</span><span class="p">)</span> <span class="nx">speedFactor</span> <span class="o">=</span> <span class="mf">0.1</span><span class="p">;</span></div><div class='line' id='LC46'>		<span class="k">if</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;</span> <span class="mi">3</span> <span class="o">||</span> <span class="nx">outerHeight</span> <span class="o">===</span> <span class="kc">null</span><span class="p">)</span> <span class="nx">outerHeight</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'>		<span class="c1">// function to be called whenever the window is scrolled or resized</span></div><div class='line' id='LC49'>		<span class="kd">function</span> <span class="nx">update</span><span class="p">(){</span></div><div class='line' id='LC50'>			<span class="kd">var</span> <span class="nx">pos</span> <span class="o">=</span> <span class="nx">$window</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">();</span>				</div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'>			<span class="nx">$this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC53'>				<span class="kd">var</span> <span class="nx">$element</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC54'>				<span class="kd">var</span> <span class="nx">top</span> <span class="o">=</span> <span class="nx">$element</span><span class="p">.</span><span class="nx">offset</span><span class="p">().</span><span class="nx">top</span><span class="p">;</span></div><div class='line' id='LC55'>				<span class="kd">var</span> <span class="nx">height</span> <span class="o">=</span> <span class="nx">getHeight</span><span class="p">(</span><span class="nx">$element</span><span class="p">);</span></div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'>				<span class="c1">// Check if totally above or totally below viewport</span></div><div class='line' id='LC58'>				<span class="k">if</span> <span class="p">(</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">height</span> <span class="o">&lt;</span> <span class="nx">pos</span> <span class="o">||</span> <span class="nx">top</span> <span class="o">&gt;</span> <span class="nx">pos</span> <span class="o">+</span> <span class="nx">windowHeight</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC59'>					<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC60'>				<span class="p">}</span></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'>				<span class="nx">$this</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;backgroundPosition&#39;</span><span class="p">,</span> <span class="nx">xpos</span> <span class="o">+</span> <span class="s2">&quot; &quot;</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">((</span><span class="nx">firstTop</span> <span class="o">-</span> <span class="nx">pos</span><span class="p">)</span> <span class="o">*</span> <span class="nx">speedFactor</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">);</span></div><div class='line' id='LC63'>			<span class="p">});</span></div><div class='line' id='LC64'>		<span class="p">}</span>		</div><div class='line' id='LC65'><br/></div><div class='line' id='LC66'>		<span class="nx">$window</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;scroll&#39;</span><span class="p">,</span> <span class="nx">update</span><span class="p">).</span><span class="nx">resize</span><span class="p">(</span><span class="nx">update</span><span class="p">);</span></div><div class='line' id='LC67'>		<span class="nx">update</span><span class="p">();</span></div><div class='line' id='LC68'>	<span class="p">};</span></div><div class='line' id='LC69'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div></td>
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
      <li>&copy; 2014 <span title="0.02717s from github-fe120-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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

