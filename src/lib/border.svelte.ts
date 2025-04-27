const border = $state({
	enabled: true
});

function toggleBorder() {
	border.enabled = !border.enabled;
}

export { border, toggleBorder };
