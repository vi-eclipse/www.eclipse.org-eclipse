const swtScriptBase = new URL(".", document.currentScript.src).href;

home = `${swtScriptBase}index.html`;

const swtGitHub = 'https://github.com/eclipse-platform/eclipse.platform.swt';

defaultBreadcrumb = toElements(`
	<a href="https://eclipseide.org/">Home</a>
	<a href="https://eclipseide.org/projects/">Projects</a>
	<a href="../index.html">Eclipse</a>
`);

defaultNav = toElements(`
<a class="fa-download" target="_out" href="https://download.eclipse.org/modeling/emf/emf/builds/"
	title="Downloads">
	Downloads<p>Update Sites</p>
</a>
<a class="fa-github" target="_out" href="https://github.com/eclipse-emf/"
	title="GitHub: Organization">
	GitHub<p>Organization</p>
</a>
`);

defaultAside = toElements(`
<a href="${swtScriptBase}index.html" class="separator"><i class='fa fa-cube'></i> Home</a>
<a href="${swtScriptBase}widgets/index.html">Widgets</a>
<a href="${swtScriptBase}snippets/index.html">Snippets</a>
<a href="${swtScriptBase}examples.html">Examples</a>
<a href="${swtScriptBase}faq.html">FAQ</a>
<a href="${swtScriptBase}tools.html">Tools</a>
<a href="${swtScriptBase}javadoc.html">Javadoc</a>
<a href="${swtScriptBase}docs.html">Documentation</a>
<a href="${swtScriptBase}community.html">Community</a>
<a href="${swtScriptBase}index.html#contact">Contact Us</a>

<a target="_out" href="${swtGitHub}" class="separator"><i class='fa fa-github'></i> GitHub</a>
<a target="_out" href="${swtGitHub}/discussions">Ask a Question</a>
<a target="_out" href="${swtGitHub}/issues">Report a Problem</a>
<a target="_out" href="${swtGitHub}/blob/master/CONTRIBUTING.md">Contribute</a>
`);

defaultNav = toElements('');
