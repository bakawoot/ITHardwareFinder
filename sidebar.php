<div id="Filters" class="sidebar">
  <div id="filterGroupCore">
    <div id= "FilterGroupCoreHeader"
      <span>Magok száma</span>
    </div>
    <div id="FilterGroupCoreLabel">
    </div>
    <div>
      <input type="text" id="filterCoreMin" oninput="filter()" placeholder="Minimum">
      <input type="text" id="filterCoreMax" oninput="filter()" placeholder="Maximum">
      <!--
      <div class="slider_min">
        <span id="filterSliderCoreMinValue">y</span>
        <span id="filterSliderCoreMinValue2">X</span>
        <input type="range" min="<?php echo(min(array_filter(array_column($rows, '# of CPU Cores'))));?>" max="<?php echo(max(array_column($rows, '# of CPU Cores')));?>" value="1" class="slider" onchange="filterCore(this)" id="filterSliderCoreMin">
      </div>
      <div class="slider_max">
        <span id="filterSliderCoreMaxValue"></span>
        <span id="filterSliderCoreMaxValue2"><?php echo(max(array_column($rows, '# of CPU Cores')));?></span>
        <input type="range" min="<?php echo(min(array_filter(array_column($rows, '# of CPU Cores'))));?>" max="<?php echo(max(array_column($rows, '# of CPU Cores')));?>" value="<?php echo max(array_column($rows, '# of CPU Cores'));?>" class="slider" onchange="filterCore(this)" id="filterSliderCoreMax">
      </div>
    -->

    </div>
  </div>
  <div id='filterGroupPackage'>
    <div id= "FilterGroupPackageHeader">
      <span>Foglalatok</span>
    </div>
    <?php
    $packages = getUniquesFromColumn($rows, 'Package', 'true');
    foreach ($packages as $package)
    {
      echo
      '<div>'.
      '<input type="checkbox" id="filterPackage'.$package.'" onchange  ="filter(this.id)">'.
      '<label>'.$package.'</label>'.
      '</div>';
    }
    ?>
  </div>
</div>
