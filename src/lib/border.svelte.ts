const border = $state({
	enabled: false
});

function toggleBorder() {
	border.enabled = !border.enabled;
}

export { border, toggleBorder };
