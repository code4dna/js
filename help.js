var lines = '<table border=0 align="center"><tr><td> \
        &nbsp; genotypes \
        <span class="tooltip" rel="#gt"><img src="/b/help.gif"><span id="gt" class="det"> \
<pre>  ./. = genotype matches reference or no variant detected   \
<br>  0/1 = heterozygous \
<br>  1/1 = homozygous \
<br>  0/2 = heterozygous: alternate allele \
<br>  1/2 = heterozygous: primary allele & alternate allele \
<br>  2/2 = homozygous: alternate allele \
</pre> \
        </span></span> \
         \
        </td><td style="padding-left:25px; padding-right:25px;"> \
        &nbsp; icons \
        <span class="tooltip" rel="#icons"><img src="/b/help.gif"><span id="icons" class="det"> \
<pre> \
     Colors indicate similar SNP effect. \
<br>  <img src="/b/o11.png"> Orange = missense \
<br>  <img src="/b/g11.png"> Green = start codon \
<br>  <img src="/b/r11.png"> Red = stop codon \
<br>  <img src="/b/p11.png"> Purple = inframe codon insertion \
<br>  <img src="/b/b11.png"> Blue = splice site region \
<br>  <img src="/b/t11.png"> Turquoise = frameshift \
<br> \
<br>  <img src="/b/o11.png"> A square indicates homozygous. 1/1 \
<br>  <img src="/b/o01.png"> A right angle triangle indicates heterozygous. 0/1 \
<br>  <div class="gb"><img src="/b/o11.png"></div> SNPs are highlighted (on mouseover) across all samples if they have the same start coordinate. \
<br>  <div class="bb"><img src="/b/o11.png"></div> Blue borders around SNPs that result in the same genotype for all samples. \
<br>  <div class="dp"><img src="/b/o11.png"></div> Black dotted borders around SNPs where there is another SNPs at the base right before or after.   \
<br>  <div class="wb"><img src="/b/o11.png"></div> Red dotted borders around SNPs where snpEff has a WARNING about the annotated transcript. \
<br>  <img src="/b/pc11.png"> Checker pattern indicates a codon loss or deletion. \
<br>  <img src="/b/black_x.png"> An X indicates a SNP is not found in that sample but is found in another (if enabled). \
</pre> \
        </span></span> \
        </td><td style="padding-left:25px; padding-right:25px;"> \
        &nbsp; navigating \
        <span class="tooltip" rel="#nav"><img src="/b/help.gif"><span id="nav" class="det"> \
<pre>  Click on the column headers to sort table. \
<br>  Mouse over a shape to see details about the SNP. \
<br>  SNPs found in the SNP population frequency study by the Broad Institute are labeled: popSNP   \
<br>  Click on a shape to see the sequence read alignments in JBrowse (if available). \
<br>  Mouse over the gene name to see a description of the gene. \
<br>  Click the gene name to go to KEGG and see gene details. \
</pre> \
        </span></span> \
        </td><td style="padding-left:25px; padding-right:25px;"> \
        &nbsp; searching \
        <span class="tooltip" rel="#search"><img src="/b/help.gif"><span id="search" class="det"> \
<pre>  All gene descriptions, orf and gene names, variant type and amino acid changes are searched.   \
<br>  Search values are not case sensitive. And to not need to be complete words. \
<br>  Examples of valid search terms include: \
 \
<br>    azole \
<br>    stop \
<br>    start_lost \
<br>    missense \
<br>    K282 \
<br>    k784r \
<br>    endonuclease \
<br>    lipid \
</pre> \
        </span></span> \
</td></tr></table>';
document.write(lines);
