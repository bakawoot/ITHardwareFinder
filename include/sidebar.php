<div id="sidebar" class="sidebar">
    <input type="range" min="1" max="<?php echo(max(array_column($rows, '# of CPU Cores')));?>" value="1" class="slider" onchange="filterCore(this)" id="filterSliderCoreMin">
    <input type="range" min="1" max="<?php echo(max(array_column($rows, '# of CPU Cores')));?>" value="<?php echo max(array_column($rows, '# of CPU Cores'));?>" class="slider" onchange="filterCore(this)" id="filterSliderCoreMax">
</div>
