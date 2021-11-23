<div id="sidebar" class="sidebar">
    <span id="demo"></span>
    <input type="range" min="<?php echo(min(array_filter(array_column($rows, '# of CPU Cores'))));?>" max="<?php echo(max(array_column($rows, '# of CPU Cores')));?>" value="1" class="slider" onchange="filterCore(this)" id="filterSliderCoreMin">
    <input type="range" min="<?php echo(min(array_filter(array_column($rows, '# of CPU Cores'))));?>" max="<?php echo(max(array_column($rows, '# of CPU Cores')));?>" value="<?php echo max(array_column($rows, '# of CPU Cores'));?>" class="slider" onchange="filterCore(this)" id="filterSliderCoreMax">
    <span id="demo2"></span>
</div>
