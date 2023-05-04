// import nwb from 'webnwb'
// const io = new nwb.NWBHDF5IO()
// io.write(file, '464212181_ephys.nwb')

// var convert = require('xml-js');
// var xml = require('fs').readFileSync('query.xml', 'utf8');
// var options = {ignoreComment: true, alwaysChildren: true};
// var result = convert.xml2js(xml, options); // or convert.xml2json(xml, options)
// console.log(result);


const xmlText = `
<Response success='true' start_row='0' num_rows='0' total_rows='57'><section-data-sets>
<section-data-set>
  <blue-channel nil="true"/>
  <delegate>false</delegate>
  <expression>true</expression>
  <failed>false</failed>
  <failed-facet>734881840</failed-facet>
  <green-channel nil="true"/>
  <id>77280584</id>
  <name nil="true"/>
  <plane-of-section-id>1</plane-of-section-id>
  <qc-date>2009-05-02T22:32:00Z</qc-date>
  <red-channel nil="true"/>
  <reference-space-id>9</reference-space-id>
  <rnaseq-design-id nil="true"/>
  <section-thickness>25.0</section-thickness>
  <specimen-id>77232707</specimen-id>
  <sphinx-id>5892</sphinx-id>
  <storage-directory>/external/aibssan/production32/prod343/image_series_77280584/</storage-directory>
  <weight>5270</weight>
  <genes>
    <gene>
      <acronym>Pantr1</acronym>
      <alias-tags>linc-Brn1a Pou3f3os</alias-tags>
      <chromosome-id type="integer">34</chromosome-id>
      <ensembl-id nil="true"/>
      <entrez-id type="integer">66297</entrez-id>
      <genomic-reference-update-id type="integer">491928275</genomic-reference-update-id>
      <homologene-id type="integer" nil="true"/>
      <id type="integer">42140</id>
      <legacy-ensembl-gene-id type="integer" nil="true"/>
      <name>POU domain, class 3, transcription factor 3 adjacent noncoding transcript 1</name>
      <organism-id type="integer">2</organism-id>
      <original-name>RIKEN cDNA 2610017I09 gene</original-name>
      <original-symbol>2610017I09Rik</original-symbol>
      <reference-genome-id type="integer" nil="true"/>
      <sphinx-id type="integer">161919</sphinx-id>
      <version-status>updated</version-status>
    </gene>
  </genes>
  <plane-of-section>
    <id type="integer">1</id>
    <name>coronal</name>
    <plane-of-section-name-facet type="integer">1147990476</plane-of-section-name-facet>
  </plane-of-section>
  <treatments>
    <treatment>
      <id type="integer">1</id>
      <name>ISH</name>
      <tags>In Situ Hybridization histology</tags>
      <treatment-name-facet type="integer">1771808872</treatment-name-facet>
    </treatment>
  </treatments>
  <specimen>
    <cell-prep-sample-id type="integer" nil="true"/>
    <cell-reporter-id type="integer" nil="true"/>
    <cortex-layer-id type="integer" nil="true"/>
    <data nil="true"/>
    <donor-id type="integer">7789</donor-id>
    <ephys-result-id type="integer" nil="true"/>
    <external-specimen-name nil="true"/>
    <failed-facet type="integer">734881840</failed-facet>
    <hemisphere>(none)</hemisphere>
    <id type="integer">77232707</id>
    <is-cell-specimen type="boolean">false</is-cell-specimen>
    <is-ish type="boolean">false</is-ish>
    <name>07-0009</name>
    <parent-id type="integer" nil="true"/>
    <parent-x-coord type="integer" nil="true"/>
    <parent-y-coord type="integer" nil="true"/>
    <parent-z-coord type="integer" nil="true"/>
    <pinned-radius type="float" nil="true"/>
    <rna-integrity-number type="float" nil="true"/>
    <specimen-id-path>/77232707/</specimen-id-path>
    <sphinx-id type="integer">26234</sphinx-id>
    <structure-id type="integer" nil="true"/>
    <tissue-ph type="float" nil="true"/>
    <treatment-id type="integer" nil="true"/>
    <weight type="integer">9000</weight>
    <donor>
      <age-id type="integer">15</age-id>
      <chemotherapy nil="true"/>
      <condition-description nil="true"/>
      <data nil="true"/>
      <date-of-birth type="datetime" nil="true"/>
      <donor-condition-description-facet type="integer" nil="true"/>
      <donor-race-only-facet type="integer" nil="true"/>
      <donor-sex-facet type="integer">4122955671</donor-sex-facet>
      <donor-strain-facet type="integer">4276187917</donor-strain-facet>
      <donor-strain-only-facet type="integer">4276187917</donor-strain-only-facet>
      <egfr-amplification nil="true"/>
      <extent-of-resection nil="true"/>
      <external-donor-name nil="true"/>
      <full-genotype nil="true"/>
      <handedness>unknown</handedness>
      <id type="integer">7789</id>
      <initial-kps nil="true"/>
      <mgmt-ihc type="integer" nil="true"/>
      <mgmt-methylation nil="true"/>
      <molecular-subtype nil="true"/>
      <multifocal nil="true"/>
      <name>07-0009</name>
      <organism-id type="integer">2</organism-id>
      <pmi type="float">0.0</pmi>
      <primary-tissue-source>AIBS</primary-tissue-source>
      <pten-deletion nil="true"/>
      <race-only nil="true"/>
      <radiation-therapy nil="true"/>
      <recurrence-by-six-months nil="true"/>
      <sex>M</sex>
      <sex-full-name>Male</sex-full-name>
      <sleep-state nil="true"/>
      <smoker nil="true"/>
      <strain>C57BL/6J</strain>
      <strain-only>C57BL/6J</strain-only>
      <survival-days type="integer" nil="true"/>
      <tags>07-0009 unknown</tags>
      <theiler-stage nil="true"/>
      <time-to-progression-or-recurrence nil="true"/>
      <transgenic-mouse-id type="integer" nil="true"/>
      <tumor-status nil="true"/>
      <weight-grams type="float">23.2</weight-grams>
      <age>
        <age-group-id type="integer">3</age-group-id>
        <days type="float">56.0</days>
        <description nil="true"/>
        <embryonic type="boolean">false</embryonic>
        <id type="integer">15</id>
        <name>P56</name>
        <organism-id type="integer">2</organism-id>
        <tags>postnatal adulthood  adult </tags>
      </age>
      <organism>
        <id type="integer">2</id>
        <name>Mus musculus</name>
        <ncbitaxonomyid type="integer">10090</ncbitaxonomyid>
        <tags>mouse rodent Mus musculus</tags>
      </organism>
    </donor>
  </specimen>
  <probes>
    <probe>
      <delegate type="boolean">false</delegate>
      <fluor-color nil="true"/>
      <forward-sequence-id type="integer">420017</forward-sequence-id>
      <gc-percent type="float">46.9649</gc-percent>
      <gene-id type="integer">42140</gene-id>
      <gi type="integer">34304027</gi>
      <id type="integer">77278252</id>
      <label>RP_070116_01_G06</label>
      <name>RP_070116_01_G06</name>
      <ncbi-accession-number>NM_183252.1</ncbi-accession-number>
      <orientation-id type="integer">2</orientation-id>
      <predicted-sequence-id type="integer">420016</predicted-sequence-id>
      <probe-type>RNA</probe-type>
      <reverse-sequence-id type="integer">420018</reverse-sequence-id>
      <sphinx-id type="integer">11535</sphinx-id>
      <orientation>
        <id type="integer">2</id>
        <name>Antisense</name>
      </orientation>
      <predicted-sequence type="Sequence">
        <id type="integer">420016</id>
        <sequence-data>CAACATGGCCGTTCCTAACTTTGAAGAGACTTTAGACATTCTTTGTTACAATGAACCTAGAAGAAAGAAGAGAAATATTACAGCGACTGTGCCCGGGACTGTAAGGCGGATAAGACCCAGCAGAATAACTGCCATGGAAGGATGCTCCTCCTGCCAATTGGCACTTATCAATGACATCGAGGGAGAGGGACAGAGTGCCTAGGTATGAGCCTTCATCAAGTGGTATGAAGGCCCTACCCCAACAGAAAGTGCTGATGTGATGAAATGGTGCTTTGGACAAGACTTTTCCTCCAAGTTGGTCCTATCCAGGGGT</sequence-data>
        <sequence-length type="integer">313</sequence-length>
      </predicted-sequence>
      <forward-primer-sequence type="Sequence">
        <id type="integer">420017</id>
        <sequence-data>CAACATGGCCGTTCCTAACT</sequence-data>
        <sequence-length type="integer">20</sequence-length>
      </forward-primer-sequence>
      <reverse-primer-sequence type="Sequence">
        <id type="integer">420018</id>
        <sequence-data>AACCCCTGGATAGGACCAAC</sequence-data>
        <sequence-length type="integer">20</sequence-length>
      </reverse-primer-sequence>
    </probe>
  </probes>
  <products>
    <product>
      <abbreviation>Mouse</abbreviation>
      <description>Genome-wide, high-resolution ISH data detailing gene expression throughout the adult mouse brain.</description>
      <id type="integer">1</id>
      <name>Mouse Brain</name>
      <product-name-facet type="integer">2757464828</product-name-facet>
      <resource>Allen Mouse Brain Atlas</resource>
      <species>Mouse</species>
      <species-name-facet type="integer">1861523945</species-name-facet>
      <tags nil="true"/>
    </product>
  </products>
</section-data-set>
</section-data-sets>
<structure-unionizes>
<structure-unionize>
  <expression-energy>0.0693636</expression-energy>
  <id>457107331</id>
  <section-data-set-id>77280584</section-data-set-id>
  <structure>
    <acronym>MB</acronym>
    <id type="integer">313</id>
    <name>Midbrain</name>
  </structure>
</structure-unionize>
<structure-unionize>
  <expression-energy>0.55326</expression-energy>
  <id>457107350</id>
  <section-data-set-id>77280584</section-data-set-id>
  <structure>
    <acronym>Isocortex</acronym>
    <id type="integer">315</id>
    <name>Isocortex</name>
  </structure>
</structure-unionize>
<structure-unionize>
  <expression-energy>0.0626376</expression-energy>
  <id>457107751</id>
  <section-data-set-id>77280584</section-data-set-id>
  <structure>
    <acronym>MY</acronym>
    <id type="integer">354</id>
    <name>Medulla</name>
  </structure>
</structure-unionize>
<structure-unionize>
  <expression-energy>0.119921</expression-energy>
  <id>457108966</id>
  <section-data-set-id>77280584</section-data-set-id>
  <structure>
    <acronym>STR</acronym>
    <id type="integer">477</id>
    <name>Striatum</name>
  </structure>
</structure-unionize>
<structure-unionize>
  <expression-energy>0.0465048</expression-energy>
  <id>457109374</id>
  <section-data-set-id>77280584</section-data-set-id>
  <structure>
    <acronym>CB</acronym>
    <id type="integer">512</id>
    <name>Cerebellum</name>
  </structure>
</structure-unionize>
<structure-unionize>
  <expression-energy>0.0348006</expression-energy>
  <id>457109698</id>
  <section-data-set-id>77280584</section-data-set-id>
  <structure>
    <acronym>TH</acronym>
    <id type="integer">549</id>
    <name>Thalamus</name>
  </structure>
</structure-unionize>
<structure-unionize>
  <expression-energy>0.177948</expression-energy>
  <id>457111659</id>
  <section-data-set-id>77280584</section-data-set-id>
  <structure>
    <acronym>OLF</acronym>
    <id type="integer">698</id>
    <name>Olfactory areas</name>
  </structure>
</structure-unionize>
<structure-unionize>
  <expression-energy>0.128441</expression-energy>
  <id>457111728</id>
  <section-data-set-id>77280584</section-data-set-id>
  <structure>
    <acronym>CTXsp</acronym>
    <id type="integer">703</id>
    <name>Cortical subplate</name>
  </structure>
</structure-unionize>
<structure-unionize>
  <expression-energy>0.106104</expression-energy>
  <id>457112268</id>
  <section-data-set-id>77280584</section-data-set-id>
  <structure>
    <acronym>P</acronym>
    <id type="integer">771</id>
    <name>Pons</name>
  </structure>
</structure-unionize>
<structure-unionize>
  <expression-energy>0.102139</expression-energy>
  <id>457112502</id>
  <section-data-set-id>77280584</section-data-set-id>
  <structure>
    <acronym>PAL</acronym>
    <id type="integer">803</id>
    <name>Pallidum</name>
  </structure>
</structure-unionize>
<structure-unionize>
  <expression-energy>0.617103</expression-energy>
  <id>457115426</id>
  <section-data-set-id>77280584</section-data-set-id>
  <structure>
    <acronym>HPF</acronym>
    <id type="integer">1089</id>
    <name>Hippocampal formation</name>
  </structure>
</structure-unionize>
<structure-unionize>
  <expression-energy>0.0527482</expression-energy>
  <id>457115470</id>
  <section-data-set-id>77280584</section-data-set-id>
  <structure>
    <acronym>HY</acronym>
    <id type="integer">1097</id>
    <name>Hypothalamus</name>
  </structure>
</structure-unionize>
</structure-unionizes>
<section-images>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307012132/0307012132_14_expression.aff</expression-path>
  <failed>false</failed>
  <height>5153</height>
  <id>77317022</id>
  <image-height>5153</image-height>
  <image-type>Primary</image-type>
  <image-width>4945</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317022</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307012132/0307012132_2_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>14</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>6</tier-count>
  <width>4945</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317022</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">5345</height>
      <id type="integer">77317173</id>
      <image-height type="integer">5345</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">5025</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317173</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch10/0308011564/0308011564_2_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">15</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">6</tier-count>
      <width type="integer">5025</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611939</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307012132/0307012132_14_expression.aff</path>
      <sub-image-id type="integer">77317022</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307012132/0307012132_22_expression.aff</expression-path>
  <failed>false</failed>
  <height>5569</height>
  <id>77317024</id>
  <image-height>5569</image-height>
  <image-type>Primary</image-type>
  <image-width>5409</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317024</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307012132/0307012132_3_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>22</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>6</tier-count>
  <width>5409</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317024</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">5585</height>
      <id type="integer">77317175</id>
      <image-height type="integer">5585</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">5473</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317175</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch10/0308011564/0308011564_3_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">23</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">6</tier-count>
      <width type="integer">5473</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611940</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307012132/0307012132_22_expression.aff</path>
      <sub-image-id type="integer">77317024</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307012132/0307012132_30_expression.aff</expression-path>
  <failed>false</failed>
  <height>5921</height>
  <id>77317026</id>
  <image-height>5921</image-height>
  <image-type>Primary</image-type>
  <image-width>6209</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317026</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307012132/0307012132_4_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>30</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>6</tier-count>
  <width>6209</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317026</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">6081</height>
      <id type="integer">77317177</id>
      <image-height type="integer">6081</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">6241</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317177</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch10/0308011564/0308011564_4_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">31</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">6</tier-count>
      <width type="integer">6241</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611941</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307012132/0307012132_30_expression.aff</path>
      <sub-image-id type="integer">77317026</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307021977/0307021977_38_expression.aff</expression-path>
  <failed>false</failed>
  <height>6337</height>
  <id>77317030</id>
  <image-height>6337</image-height>
  <image-type>Primary</image-type>
  <image-width>6801</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317030</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch7/0307021977/0307021977_1_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>38</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>6</tier-count>
  <width>6801</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317030</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">6385</height>
      <id type="integer">77317181</id>
      <image-height type="integer">6385</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">6833</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317181</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch10/0308021795/0308021795_1_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">39</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">6</tier-count>
      <width type="integer">6833</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611942</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307021977/0307021977_38_expression.aff</path>
      <sub-image-id type="integer">77317030</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307021977/0307021977_46_expression.aff</expression-path>
  <failed>false</failed>
  <height>6625</height>
  <id>77317032</id>
  <image-height>6625</image-height>
  <image-type>Primary</image-type>
  <image-width>7345</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317032</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch7/0307021977/0307021977_2_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>46</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>6</tier-count>
  <width>7345</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317032</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">6545</height>
      <id type="integer">77317183</id>
      <image-height type="integer">6545</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">7281</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317183</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch10/0308021795/0308021795_2_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">47</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">6</tier-count>
      <width type="integer">7281</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611943</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307021977/0307021977_46_expression.aff</path>
      <sub-image-id type="integer">77317032</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307021977/0307021977_62_expression.aff</expression-path>
  <failed>false</failed>
  <height>6817</height>
  <id>77317036</id>
  <image-height>6817</image-height>
  <image-type>Primary</image-type>
  <image-width>8017</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317036</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch7/0307021977/0307021977_4_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>62</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>6</tier-count>
  <width>8017</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317036</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7041</height>
      <id type="integer">77317187</id>
      <image-height type="integer">7041</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">7953</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317187</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch10/0308021795/0308021795_4_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">63</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">6</tier-count>
      <width type="integer">7953</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611944</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307021977/0307021977_62_expression.aff</path>
      <sub-image-id type="integer">77317036</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307031535/0307031535_70_expression.aff</expression-path>
  <failed>false</failed>
  <height>7105</height>
  <id>77317040</id>
  <image-height>7105</image-height>
  <image-type>Primary</image-type>
  <image-width>8209</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317040</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production32/prod291/0307031535/0307031535_1_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>70</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>6</tier-count>
  <width>8209</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317040</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7297</height>
      <id type="integer">77317191</id>
      <image-height type="integer">7297</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">8097</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317191</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch10/0308031915/0308031915_1_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">71</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">6</tier-count>
      <width type="integer">8097</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611945</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307031535/0307031535_70_expression.aff</path>
      <sub-image-id type="integer">77317040</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307031535/0307031535_78_expression.aff</expression-path>
  <failed>false</failed>
  <height>7185</height>
  <id>77317042</id>
  <image-height>7185</image-height>
  <image-type>Primary</image-type>
  <image-width>8369</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317042</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production32/prod291/0307031535/0307031535_2_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>78</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>8369</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317042</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">6849</height>
      <id type="integer">77317193</id>
      <image-height type="integer">6849</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">8369</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317193</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch10/0308031915/0308031915_2_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">79</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">8369</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611946</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307031535/0307031535_78_expression.aff</path>
      <sub-image-id type="integer">77317042</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307031535/0307031535_86_expression.aff</expression-path>
  <failed>false</failed>
  <height>7233</height>
  <id>77317044</id>
  <image-height>7233</image-height>
  <image-type>Primary</image-type>
  <image-width>8721</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317044</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production32/prod291/0307031535/0307031535_3_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>86</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>8721</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317044</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7089</height>
      <id type="integer">77317195</id>
      <image-height type="integer">7089</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">8737</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317195</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch10/0308031915/0308031915_3_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">87</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">8737</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611947</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307031535/0307031535_86_expression.aff</path>
      <sub-image-id type="integer">77317044</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307031535/0307031535_94_expression.aff</expression-path>
  <failed>false</failed>
  <height>7185</height>
  <id>77317046</id>
  <image-height>7185</image-height>
  <image-type>Primary</image-type>
  <image-width>8945</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317046</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production32/prod291/0307031535/0307031535_4_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>94</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>8945</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317046</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7089</height>
      <id type="integer">77317197</id>
      <image-height type="integer">7089</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">9041</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317197</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch10/0308031915/0308031915_4_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">95</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">9041</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611948</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307031535/0307031535_94_expression.aff</path>
      <sub-image-id type="integer">77317046</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307041906/0307041906_102_expression.aff</expression-path>
  <failed>false</failed>
  <height>6913</height>
  <id>77317050</id>
  <image-height>6913</image-height>
  <image-type>Primary</image-type>
  <image-width>11873</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317050</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307041906/0307041906_1_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>102</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>11873</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317050</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7057</height>
      <id type="integer">77317201</id>
      <image-height type="integer">7057</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">9329</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317201</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch10/0308041686/0308041686_1_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">103</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">9329</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611949</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307041906/0307041906_102_expression.aff</path>
      <sub-image-id type="integer">77317050</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307041906/0307041906_110_expression.aff</expression-path>
  <failed>false</failed>
  <height>7041</height>
  <id>77317052</id>
  <image-height>7041</image-height>
  <image-type>Primary</image-type>
  <image-width>9425</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317052</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307041906/0307041906_2_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>110</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>9425</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317052</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7009</height>
      <id type="integer">77317203</id>
      <image-height type="integer">7009</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">9409</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317203</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch10/0308041686/0308041686_2_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">111</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">9409</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611950</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307041906/0307041906_110_expression.aff</path>
      <sub-image-id type="integer">77317052</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307041906/0307041906_118_expression.aff</expression-path>
  <failed>false</failed>
  <height>6673</height>
  <id>77317054</id>
  <image-height>6673</image-height>
  <image-type>Primary</image-type>
  <image-width>9473</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317054</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307041906/0307041906_3_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>118</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>9473</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317054</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">6977</height>
      <id type="integer">77317205</id>
      <image-height type="integer">6977</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">9457</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317205</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch10/0308041686/0308041686_3_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">119</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">9457</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611951</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307041906/0307041906_118_expression.aff</path>
      <sub-image-id type="integer">77317054</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307041906/0307041906_126_expression.aff</expression-path>
  <failed>false</failed>
  <height>7025</height>
  <id>77317056</id>
  <image-height>7025</image-height>
  <image-type>Primary</image-type>
  <image-width>9393</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317056</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307041906/0307041906_4_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>126</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>9393</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317056</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">6673</height>
      <id type="integer">77317207</id>
      <image-height type="integer">6673</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">8769</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317207</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch10/0308041686/0308041686_4_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">127</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">8769</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611952</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307041906/0307041906_126_expression.aff</path>
      <sub-image-id type="integer">77317056</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307051743/0307051743_134_expression.aff</expression-path>
  <failed>false</failed>
  <height>6497</height>
  <id>77317060</id>
  <image-height>6497</image-height>
  <image-type>Primary</image-type>
  <image-width>8001</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317060</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307051743/0307051743_1_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>134</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>6</tier-count>
  <width>8001</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317060</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7105</height>
      <id type="integer">77317211</id>
      <image-height type="integer">7105</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">8049</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317211</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch10/0308052046/0308052046_1_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">135</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">6</tier-count>
      <width type="integer">8049</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611953</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307051743/0307051743_134_expression.aff</path>
      <sub-image-id type="integer">77317060</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307051743/0307051743_142_expression.aff</expression-path>
  <failed>false</failed>
  <height>8801</height>
  <id>77317062</id>
  <image-height>8801</image-height>
  <image-type>Primary</image-type>
  <image-width>9057</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317062</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307051743/0307051743_2_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>142</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>9057</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317062</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">6913</height>
      <id type="integer">77317213</id>
      <image-height type="integer">6913</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">9073</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317213</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch10/0308052046/0308052046_2_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">143</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">9073</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611954</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307051743/0307051743_142_expression.aff</path>
      <sub-image-id type="integer">77317062</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307051743/0307051743_150_expression.aff</expression-path>
  <failed>false</failed>
  <height>7297</height>
  <id>77317064</id>
  <image-height>7297</image-height>
  <image-type>Primary</image-type>
  <image-width>9409</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317064</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307051743/0307051743_3_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>150</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>9409</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317064</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7425</height>
      <id type="integer">77317215</id>
      <image-height type="integer">7425</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">9409</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317215</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch10/0308052046/0308052046_3_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">151</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">9409</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611955</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307051743/0307051743_150_expression.aff</path>
      <sub-image-id type="integer">77317064</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307051743/0307051743_158_expression.aff</expression-path>
  <failed>false</failed>
  <height>7409</height>
  <id>77317066</id>
  <image-height>7409</image-height>
  <image-type>Primary</image-type>
  <image-width>9809</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317066</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307051743/0307051743_4_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>158</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>9809</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317066</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7329</height>
      <id type="integer">77317217</id>
      <image-height type="integer">7329</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">9825</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317217</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch10/0308052046/0308052046_4_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">159</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">9825</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611956</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307051743/0307051743_158_expression.aff</path>
      <sub-image-id type="integer">77317066</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307061903/0307061903_166_expression.aff</expression-path>
  <failed>false</failed>
  <height>7457</height>
  <id>77317070</id>
  <image-height>7457</image-height>
  <image-type>Primary</image-type>
  <image-width>9937</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317070</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307061903/0307061903_1_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>166</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>9937</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317070</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7265</height>
      <id type="integer">77317221</id>
      <image-height type="integer">7265</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">9825</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317221</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308061638/0308061638_1_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">167</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">9825</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611957</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307061903/0307061903_166_expression.aff</path>
      <sub-image-id type="integer">77317070</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307061903/0307061903_174_expression.aff</expression-path>
  <failed>false</failed>
  <height>7361</height>
  <id>77317072</id>
  <image-height>7361</image-height>
  <image-type>Primary</image-type>
  <image-width>13729</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317072</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307061903/0307061903_2_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>174</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>13729</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317072</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7377</height>
      <id type="integer">77317223</id>
      <image-height type="integer">7377</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">10081</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317223</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308061638/0308061638_2_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">175</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">10081</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611958</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307061903/0307061903_174_expression.aff</path>
      <sub-image-id type="integer">77317072</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307061903/0307061903_182_expression.aff</expression-path>
  <failed>false</failed>
  <height>7345</height>
  <id>77317074</id>
  <image-height>7345</image-height>
  <image-type>Primary</image-type>
  <image-width>10257</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317074</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307061903/0307061903_3_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>182</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>10257</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317074</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7297</height>
      <id type="integer">77317225</id>
      <image-height type="integer">7297</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">10241</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317225</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308061638/0308061638_3_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">183</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">10241</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611959</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307061903/0307061903_182_expression.aff</path>
      <sub-image-id type="integer">77317074</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307061903/0307061903_190_expression.aff</expression-path>
  <failed>false</failed>
  <height>7057</height>
  <id>77317076</id>
  <image-height>7057</image-height>
  <image-type>Primary</image-type>
  <image-width>10385</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317076</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307061903/0307061903_4_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>190</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>10385</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317076</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7249</height>
      <id type="integer">77317227</id>
      <image-height type="integer">7249</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">10321</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317227</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308061638/0308061638_4_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">191</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">10321</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611960</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307061903/0307061903_190_expression.aff</path>
      <sub-image-id type="integer">77317076</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307071815/0307071815_198_expression.aff</expression-path>
  <failed>false</failed>
  <height>6929</height>
  <id>77317080</id>
  <image-height>6929</image-height>
  <image-type>Primary</image-type>
  <image-width>10433</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317080</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307071815/0307071815_1_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>198</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>10433</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317080</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">6961</height>
      <id type="integer">77317231</id>
      <image-height type="integer">6961</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">10449</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317231</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308071708/0308071708_1_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">199</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">10449</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611961</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307071815/0307071815_198_expression.aff</path>
      <sub-image-id type="integer">77317080</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307071815/0307071815_206_expression.aff</expression-path>
  <failed>false</failed>
  <height>7617</height>
  <id>77317082</id>
  <image-height>7617</image-height>
  <image-type>Primary</image-type>
  <image-width>10513</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317082</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307071815/0307071815_2_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>206</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>10513</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317082</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">6993</height>
      <id type="integer">77317233</id>
      <image-height type="integer">6993</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">10497</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317233</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308071708/0308071708_2_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">207</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">10497</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611962</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307071815/0307071815_206_expression.aff</path>
      <sub-image-id type="integer">77317082</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307071815/0307071815_214_expression.aff</expression-path>
  <failed>false</failed>
  <height>7361</height>
  <id>77317084</id>
  <image-height>7361</image-height>
  <image-type>Primary</image-type>
  <image-width>10577</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317084</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307071815/0307071815_3_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>214</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>10577</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317084</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7569</height>
      <id type="integer">77317235</id>
      <image-height type="integer">7569</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">10465</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317235</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308071708/0308071708_3_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">215</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">10465</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611963</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307071815/0307071815_214_expression.aff</path>
      <sub-image-id type="integer">77317084</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307071815/0307071815_222_expression.aff</expression-path>
  <failed>false</failed>
  <height>7697</height>
  <id>77317086</id>
  <image-height>7697</image-height>
  <image-type>Primary</image-type>
  <image-width>10577</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317086</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307071815/0307071815_4_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>222</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>10577</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317086</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7681</height>
      <id type="integer">77317237</id>
      <image-height type="integer">7681</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">10673</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317237</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308071708/0308071708_4_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">223</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">10673</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611964</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307071815/0307071815_222_expression.aff</path>
      <sub-image-id type="integer">77317086</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307082133/0307082133_230_expression.aff</expression-path>
  <failed>false</failed>
  <height>7553</height>
  <id>77317090</id>
  <image-height>7553</image-height>
  <image-type>Primary</image-type>
  <image-width>10641</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317090</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307082133/0307082133_1_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>230</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>10641</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317090</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7425</height>
      <id type="integer">77317241</id>
      <image-height type="integer">7425</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">10641</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317241</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308081751/0308081751_1_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">231</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">10641</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611965</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307082133/0307082133_230_expression.aff</path>
      <sub-image-id type="integer">77317090</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307082133/0307082133_238_expression.aff</expression-path>
  <failed>false</failed>
  <height>7473</height>
  <id>77317092</id>
  <image-height>7473</image-height>
  <image-type>Primary</image-type>
  <image-width>10673</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317092</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307082133/0307082133_2_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>238</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>10673</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317092</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7409</height>
      <id type="integer">77317243</id>
      <image-height type="integer">7409</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">10657</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317243</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308081751/0308081751_2_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">239</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">10657</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611966</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307082133/0307082133_238_expression.aff</path>
      <sub-image-id type="integer">77317092</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307082133/0307082133_246_expression.aff</expression-path>
  <failed>false</failed>
  <height>7825</height>
  <id>77317094</id>
  <image-height>7825</image-height>
  <image-type>Primary</image-type>
  <image-width>10689</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317094</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307082133/0307082133_3_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>246</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>10689</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317094</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7473</height>
      <id type="integer">77317245</id>
      <image-height type="integer">7473</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">10609</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317245</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308081751/0308081751_3_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">247</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">10609</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611967</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307082133/0307082133_246_expression.aff</path>
      <sub-image-id type="integer">77317094</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307082133/0307082133_254_expression.aff</expression-path>
  <failed>false</failed>
  <height>7297</height>
  <id>77317096</id>
  <image-height>7297</image-height>
  <image-type>Primary</image-type>
  <image-width>10609</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317096</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307082133/0307082133_4_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>254</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>10609</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317096</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7601</height>
      <id type="integer">77317247</id>
      <image-height type="integer">7601</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">10593</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317247</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308081751/0308081751_4_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">255</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">10593</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611968</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307082133/0307082133_254_expression.aff</path>
      <sub-image-id type="integer">77317096</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307091903/0307091903_262_expression.aff</expression-path>
  <failed>false</failed>
  <height>8065</height>
  <id>77317100</id>
  <image-height>8065</image-height>
  <image-type>Primary</image-type>
  <image-width>10545</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317100</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307091903/0307091903_1_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>262</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>10545</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317100</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359127</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7569</height>
      <id type="integer">77316647</id>
      <image-height type="integer">7569</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">10577</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77316647</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch10/0304092120/0304092120_1_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">259</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">10577</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611969</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307091903/0307091903_262_expression.aff</path>
      <sub-image-id type="integer">77317100</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307091903/0307091903_270_expression.aff</expression-path>
  <failed>false</failed>
  <height>7537</height>
  <id>77317102</id>
  <image-height>7537</image-height>
  <image-type>Primary</image-type>
  <image-width>10417</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317102</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307091903/0307091903_2_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>270</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>10417</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317102</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7521</height>
      <id type="integer">77317253</id>
      <image-height type="integer">7521</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">10529</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317253</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308091609/0308091609_2_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">271</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">10529</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611970</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307091903/0307091903_270_expression.aff</path>
      <sub-image-id type="integer">77317102</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307091903/0307091903_278_expression.aff</expression-path>
  <failed>false</failed>
  <height>7681</height>
  <id>77317104</id>
  <image-height>7681</image-height>
  <image-type>Primary</image-type>
  <image-width>10353</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317104</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307091903/0307091903_3_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>278</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>10353</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317104</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7345</height>
      <id type="integer">77317255</id>
      <image-height type="integer">7345</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">10369</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317255</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308091609/0308091609_3_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">279</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">10369</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611971</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307091903/0307091903_278_expression.aff</path>
      <sub-image-id type="integer">77317104</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307091903/0307091903_286_expression.aff</expression-path>
  <failed>false</failed>
  <height>7841</height>
  <id>77317106</id>
  <image-height>7841</image-height>
  <image-type>Primary</image-type>
  <image-width>10321</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317106</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307091903/0307091903_4_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>286</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>10321</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317106</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7361</height>
      <id type="integer">77317257</id>
      <image-height type="integer">7361</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">10321</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317257</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308091609/0308091609_4_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">287</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">10321</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611972</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307091903/0307091903_286_expression.aff</path>
      <sub-image-id type="integer">77317106</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307102218/0307102218_294_expression.aff</expression-path>
  <failed>false</failed>
  <height>6785</height>
  <id>77317110</id>
  <image-height>6785</image-height>
  <image-type>Primary</image-type>
  <image-width>10257</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317110</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307102218/0307102218_1_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>294</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>10257</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317110</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7281</height>
      <id type="integer">77317261</id>
      <image-height type="integer">7281</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">10193</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317261</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308102052/0308102052_1_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">295</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">10193</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611973</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307102218/0307102218_294_expression.aff</path>
      <sub-image-id type="integer">77317110</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307102218/0307102218_302_expression.aff</expression-path>
  <failed>false</failed>
  <height>7505</height>
  <id>77317112</id>
  <image-height>7505</image-height>
  <image-type>Primary</image-type>
  <image-width>10225</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317112</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307102218/0307102218_2_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>302</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>10225</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317112</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7585</height>
      <id type="integer">77317263</id>
      <image-height type="integer">7585</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">10129</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317263</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308102052/0308102052_2_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">303</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">10129</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611974</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307102218/0307102218_302_expression.aff</path>
      <sub-image-id type="integer">77317112</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307102218/0307102218_310_expression.aff</expression-path>
  <failed>false</failed>
  <height>7473</height>
  <id>77317114</id>
  <image-height>7473</image-height>
  <image-type>Primary</image-type>
  <image-width>10145</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317114</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307102218/0307102218_3_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>310</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>10145</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317114</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7377</height>
      <id type="integer">77317265</id>
      <image-height type="integer">7377</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">10097</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317265</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308102052/0308102052_3_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">311</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">10097</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611975</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307102218/0307102218_310_expression.aff</path>
      <sub-image-id type="integer">77317114</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307102218/0307102218_318_expression.aff</expression-path>
  <failed>false</failed>
  <height>7665</height>
  <id>77317116</id>
  <image-height>7665</image-height>
  <image-type>Primary</image-type>
  <image-width>9985</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317116</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307102218/0307102218_4_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>318</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>9985</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317116</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7393</height>
      <id type="integer">77317267</id>
      <image-height type="integer">7393</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">9921</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317267</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308102052/0308102052_4_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">319</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">9921</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611976</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307102218/0307102218_318_expression.aff</path>
      <sub-image-id type="integer">77317116</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307112044/0307112044_326_expression.aff</expression-path>
  <failed>false</failed>
  <height>7361</height>
  <id>77317120</id>
  <image-height>7361</image-height>
  <image-type>Primary</image-type>
  <image-width>9921</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317120</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307112044/0307112044_1_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>326</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>9921</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317120</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7553</height>
      <id type="integer">77317271</id>
      <image-height type="integer">7553</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">9825</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317271</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308112139/0308112139_1_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">327</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">9825</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611977</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307112044/0307112044_326_expression.aff</path>
      <sub-image-id type="integer">77317120</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307112044/0307112044_334_expression.aff</expression-path>
  <failed>false</failed>
  <height>6481</height>
  <id>77317122</id>
  <image-height>6481</image-height>
  <image-type>Primary</image-type>
  <image-width>9681</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317122</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307112044/0307112044_2_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>334</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>9681</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317122</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7393</height>
      <id type="integer">77317273</id>
      <image-height type="integer">7393</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">9601</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317273</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308112139/0308112139_2_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">335</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">9601</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611978</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307112044/0307112044_334_expression.aff</path>
      <sub-image-id type="integer">77317122</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307112044/0307112044_342_expression.aff</expression-path>
  <failed>false</failed>
  <height>7105</height>
  <id>77317124</id>
  <image-height>7105</image-height>
  <image-type>Primary</image-type>
  <image-width>9473</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317124</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307112044/0307112044_3_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>342</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>9473</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317124</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7281</height>
      <id type="integer">77317275</id>
      <image-height type="integer">7281</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">9425</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317275</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308112139/0308112139_3_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">343</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">9425</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611979</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307112044/0307112044_342_expression.aff</path>
      <sub-image-id type="integer">77317124</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307112044/0307112044_350_expression.aff</expression-path>
  <failed>false</failed>
  <height>7329</height>
  <id>77317126</id>
  <image-height>7329</image-height>
  <image-type>Primary</image-type>
  <image-width>9329</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317126</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch9/0307112044/0307112044_4_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>350</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>9329</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317126</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7233</height>
      <id type="integer">77317277</id>
      <image-height type="integer">7233</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">9345</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317277</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308112139/0308112139_4_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">351</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">9345</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611980</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307112044/0307112044_350_expression.aff</path>
      <sub-image-id type="integer">77317126</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307121650/0307121650_358_expression.aff</expression-path>
  <failed>false</failed>
  <height>6945</height>
  <id>77317130</id>
  <image-height>6945</image-height>
  <image-type>Primary</image-type>
  <image-width>9121</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317130</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch7/0307121650/0307121650_1_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>358</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>9121</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317130</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">6689</height>
      <id type="integer">77317281</id>
      <image-height type="integer">6689</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">9057</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317281</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308122112/0308122112_1_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">359</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">9057</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611981</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307121650/0307121650_358_expression.aff</path>
      <sub-image-id type="integer">77317130</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307121650/0307121650_366_expression.aff</expression-path>
  <failed>false</failed>
  <height>7105</height>
  <id>77317132</id>
  <image-height>7105</image-height>
  <image-type>Primary</image-type>
  <image-width>8913</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317132</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch7/0307121650/0307121650_2_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>366</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>8913</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317132</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">6961</height>
      <id type="integer">77317283</id>
      <image-height type="integer">6961</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">8769</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317283</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308122112/0308122112_2_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">367</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">8769</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611982</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307121650/0307121650_366_expression.aff</path>
      <sub-image-id type="integer">77317132</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307121650/0307121650_374_expression.aff</expression-path>
  <failed>false</failed>
  <height>7153</height>
  <id>77317134</id>
  <image-height>7153</image-height>
  <image-type>Primary</image-type>
  <image-width>8545</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317134</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch7/0307121650/0307121650_3_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>374</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>8545</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317134</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">7121</height>
      <id type="integer">77317285</id>
      <image-height type="integer">7121</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">8561</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317285</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308122112/0308122112_3_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">375</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">8561</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611983</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307121650/0307121650_374_expression.aff</path>
      <sub-image-id type="integer">77317134</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307121650/0307121650_382_expression.aff</expression-path>
  <failed>false</failed>
  <height>7089</height>
  <id>77317136</id>
  <image-height>7089</image-height>
  <image-type>Primary</image-type>
  <image-width>8385</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317136</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production19/stitch7/0307121650/0307121650_4_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>382</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>7</tier-count>
  <width>8385</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317136</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">6641</height>
      <id type="integer">77317287</id>
      <image-height type="integer">6641</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">8417</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317287</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308122112/0308122112_4_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">383</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">7</tier-count>
      <width type="integer">8417</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611984</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307121650/0307121650_382_expression.aff</path>
      <sub-image-id type="integer">77317136</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307131650/0307131650_390_expression.aff</expression-path>
  <failed>false</failed>
  <height>6337</height>
  <id>77317140</id>
  <image-height>6337</image-height>
  <image-type>Primary</image-type>
  <image-width>8193</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317140</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production32/prod291/0307131650/0307131650_1_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>390</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>6</tier-count>
  <width>8193</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317140</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">6785</height>
      <id type="integer">77317291</id>
      <image-height type="integer">6785</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">8129</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317291</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308132054/0308132054_1_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">391</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">6</tier-count>
      <width type="integer">8129</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611985</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307131650/0307131650_390_expression.aff</path>
      <sub-image-id type="integer">77317140</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307131650/0307131650_398_expression.aff</expression-path>
  <failed>false</failed>
  <height>6417</height>
  <id>77317142</id>
  <image-height>6417</image-height>
  <image-type>Primary</image-type>
  <image-width>7873</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317142</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production32/prod291/0307131650/0307131650_2_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>398</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>6</tier-count>
  <width>7873</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317142</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">6465</height>
      <id type="integer">77317293</id>
      <image-height type="integer">6465</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">7921</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317293</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308132054/0308132054_2_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">399</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">6</tier-count>
      <width type="integer">7921</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611986</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307131650/0307131650_398_expression.aff</path>
      <sub-image-id type="integer">77317142</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307131650/0307131650_406_expression.aff</expression-path>
  <failed>false</failed>
  <height>6129</height>
  <id>77317144</id>
  <image-height>6129</image-height>
  <image-type>Primary</image-type>
  <image-width>7585</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317144</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production32/prod291/0307131650/0307131650_3_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>406</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>6</tier-count>
  <width>7585</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317144</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">6257</height>
      <id type="integer">77317295</id>
      <image-height type="integer">6257</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">7649</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317295</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308132054/0308132054_3_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">407</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">6</tier-count>
      <width type="integer">7649</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611987</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307131650/0307131650_406_expression.aff</path>
      <sub-image-id type="integer">77317144</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
<section-image>
  <annotated>false</annotated>
  <axes nil="true"/>
  <bits-per-component>8</bits-per-component>
  <data-set-id>77280584</data-set-id>
  <expression nil="true"/>
  <expression-path>/external/aibssan/production32/prod291/0307131650/0307131650_414_expression.aff</expression-path>
  <failed>false</failed>
  <height>5937</height>
  <id>77317146</id>
  <image-height>5937</image-height>
  <image-type>Primary</image-type>
  <image-width>7361</image-width>
  <isi-experiment-id nil="true"/>
  <lims1-id>77317146</lims1-id>
  <number-of-components>3</number-of-components>
  <ophys-experiment-id nil="true"/>
  <path>/external/aibssan/production32/prod291/0307131650/0307131650_4_zoom.aff</path>
  <projection-function nil="true"/>
  <resolution>1.049</resolution>
  <section-number>414</section-number>
  <specimen-id nil="true"/>
  <structure-id nil="true"/>
  <tier-count>6</tier-count>
  <width>7361</width>
  <x>0</x>
  <y>0</y>
  <associates>
    <associate>
      <annotated type="boolean">false</annotated>
      <ar-association-key-name type="NilClass">77317146</ar-association-key-name>
      <axes nil="true"/>
      <bits-per-component type="integer">8</bits-per-component>
      <data-set-id type="integer">77359159</data-set-id>
      <expression type="boolean" nil="true"/>
      <expression-path nil="true"/>
      <failed type="boolean">false</failed>
      <height type="integer">6097</height>
      <id type="integer">77317297</id>
      <image-height type="integer">6097</image-height>
      <image-type>Primary</image-type>
      <image-width type="integer">7297</image-width>
      <isi-experiment-id type="integer" nil="true"/>
      <lims1-id type="integer">77317297</lims1-id>
      <number-of-components type="integer">3</number-of-components>
      <ophys-experiment-id type="integer" nil="true"/>
      <path>/external/aibssan/production19/stitch9/0308132054/0308132054_4_zoom.aff</path>
      <projection-function nil="true"/>
      <resolution type="float">1.049</resolution>
      <section-number type="integer">415</section-number>
      <specimen-id type="integer" nil="true"/>
      <structure-id type="integer" nil="true"/>
      <tier-count type="integer">6</tier-count>
      <width type="integer">7297</width>
      <x type="integer">0</x>
      <y type="integer">0</y>
    </associate>
  </associates>
  <alternate-images>
    <alternate-image>
      <id type="integer">611988</id>
      <image-type>Expression</image-type>
      <path>/external/aibssan/production32/prod291/0307131650/0307131650_414_expression.aff</path>
      <sub-image-id type="integer">77317146</sub-image-id>
    </alternate-image>
  </alternate-images>
</section-image>
</section-images>
</Response>
    `
    // var cheerio = require("cheerio")
    // var cheerioOptions = {
    //     xml: {
    //         withDomLvl1: true,
    //         normalizeWhitespace: false,
    //         xmlMode: true,
    //         decodeEntities: true,
    //     },
    // }
    // const $ = cheerio.load(xmlText, cheerioOptions);
    // console.log($.html());
    // console.log($.text());

    // function transformXml(xmls){
    // 	//创建xml对象
    // 	//IE如何创建xml对象不再介绍 自行百度 此创建方式仅对非IE浏览器有效
    //     var cheerioOptions = {
    //         xml: {
    //             withDomLvl1: true,
    //             normalizeWhitespace: false,
    //             xmlMode: true,
    //             decodeEntities: true,
    //         },
    //     }
    //     const $ = cheerio.load(xmls, cheerioOptions);
    //     console.log($.html().children)
    //     // let root = $.text()
    //     // //获取xml文档的所有子元素
    //     // const rootChildren = root.children;
    //     // //构建递归方法
    //     // function generate(rootChildren) {
    //     //     const d1 = {}
    //     //     //遍历子元素
    //     //     for (let i = 0; i < rootChildren.length; i++) {
    //     //         const child = rootChildren[i];
    //     //         // 如果子元素有孩子元素 进入递归
    //     //         if (child.children.length >0) {
    //     //             // 进入递归  递归返回值加入js对象
    //     //             d1[child.nodeName] = generate(child.children);
    //     //             // 如果元素有属性值 注意!! 此处 如果元素既有子标签又有属性 需先进入递归 不然d1[child.nodeName]会取不到值
    //     //             if (child.attributes != null){
    //     //                 // 遍历所有属性 包括自定义属性
    //     //                 for (const key in child.attributes) {
    //     //                     //如果属性value 不为null
    //     //                     if (child.attributes[key].value != null){
    //     //                         //将attribute存入
    //     //                         d1[child.nodeName][child.attributes[key].name] = child.attributes[key].value;
    //     //                     }
    //     //                 }
    //     //             }
    //     //         } else {
    //     //             // 如果子元素没有孩子元素
    //     //             // 声明对象 用于存放标签text和attribute值
    //     //             const d2 = {}
    //     //             // 获取元素孩子节点 如果第一个节点不是null 代表标签有text值
    //     //             if (child.childNodes[0] != null){
    //     //                 // 将text加入d2对象存储
    //     //                 d2['text'] = child.childNodes[0].nodeValue;
    //     //             }else {
    //     //                 // 将d2对象text元素赋值为'' 统一对象属性
    //     //                 d2['text'] = ''
    //     //             }
    //     //             // 如果元素有属性值
    //     //             if (child.attributes != null){
    //     //                 // 遍历所有属性 包括自定义属性
    //     //                 for (const key in child.attributes) {
    //     //                     //如果属性value 不为null
    //     //                     if (child.attributes[key].value != null){
    //     //                         //将attribute加入d2对象存储
    //     //                         d2[child.attributes[key].name] = child.attributes[key].value;
    //     //                     }
    //     //                 }
    //     //             }
    //     //             //将d2对象存储入d1
    //     //             d1[child.nodeName] = d2
    //     //         }
    //     //     }
    //     //     //返回d1对象用于递归
    //     //     return d1
    //     // }
    //     // return generate(rootChildren);
    //     return ''
    // }

    // const res = transformXml(xmlText)
    // console.log(res)

var convert = require('xml-js');
var xml = require('fs').readFileSync('query.xml', 'utf8');
var options = {ignoreComment: true, alwaysChildren: true};
var result = convert.xml2js(xml, options); // or convert.xml2json(xml, options)
console.log(result.elements[0].elements);