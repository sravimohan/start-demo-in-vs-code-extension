import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const zoomLevel = 'zoomLevel';
	const fullScreen = 'fullScreen';
	const centeredLayout = 'centeredLayout';
	const showSideBar = 'showSideBar';
	const showStatusBar = 'showStatusBar';
	const showActivityBar = 'showActivityBar';
	const showPanel = 'showPanel';
	const showEditorArea = 'showEditorArea';
	const sideBarLocation = 'sideBarLocation';
	const panelLocation = 'panelLocation';

	let defaultZoomLevel = vscode.workspace.getConfiguration('').get(`window.${zoomLevel}`);
	let defaultFullScreen = vscode.workspace.getConfiguration('').get(`window.${fullScreen}`);
	let defaultCenteredLayout = vscode.workspace.getConfiguration('').get(`window.${centeredLayout}`);
	let defaultShowSideBar = vscode.workspace.getConfiguration('').get(`window.${showSideBar}`);
	let defaultShowStatusBar = vscode.workspace.getConfiguration('').get(`window.${showStatusBar}`);
	let defaultShowActivityBar = vscode.workspace.getConfiguration('').get(`window.${showActivityBar}`);
	let defaultShowPanel = vscode.workspace.getConfiguration('').get(`window.${showPanel}`);
	let defaultShowEditorArea = vscode.workspace.getConfiguration('').get(`window.${showEditorArea}`);
	let defaultSideBarLocation = vscode.workspace.getConfiguration('').get(`window.${sideBarLocation}`);
	let defaultPanelLocation = vscode.workspace.getConfiguration('').get(`window.${panelLocation}`);

	let startDemo = vscode.commands.registerCommand('start-demo.startstartDemo', () => {
		vscode.commands.executeCommand('setContext', 'instartDemo', true);
		set(fullScreen);
		set(centeredLayout);
		set(showSideBar);
		set(showStatusBar);
		set(showActivityBar);
		set(showPanel);
		set(showEditorArea);
		set(sideBarLocation);
		set(panelLocation);
		set(zoomLevel);
		setZenMode();
	});

	let endDemo = vscode.commands.registerCommand('start-demo.endstartDemo', () => {
		vscode.commands.executeCommand('setContext', 'instartDemo', false);
		reset(fullScreen, defaultFullScreen);
		reset(centeredLayout, defaultCenteredLayout);
		reset(showSideBar, defaultShowSideBar);
		reset(showStatusBar, defaultShowStatusBar);
		reset(showActivityBar, defaultShowActivityBar);
		reset(showPanel, defaultShowPanel);
		reset(showEditorArea, defaultShowEditorArea);
		reset(sideBarLocation, defaultSideBarLocation);
		reset(panelLocation, defaultPanelLocation);
		reset(zoomLevel, defaultZoomLevel);
		resetZenMode();
	});

	context.subscriptions.push(startDemo);
	context.subscriptions.push(endDemo);
}

function set(section: string) {
	let config = vscode.workspace.getConfiguration('').get(`startDemo.${section}`);
	vscode.workspace.getConfiguration('').update(`window.${section}`, config, true);
}

function reset(section: string, defaultValue: any) {
	vscode.workspace.getConfiguration('').update(`window.${section}`, defaultValue, true);
}

function setZenMode() {
	let enableZenMode = vscode.workspace.getConfiguration('').get('startDemo.enableZenMode');
	if (enableZenMode) {
		vscode.commands.executeCommand('workbench.action.toggleZenMode');
	}
}

function resetZenMode() {
	let enableZenMode = vscode.workspace.getConfiguration('').get('startDemo.enableZenMode');
	if (enableZenMode) {
		vscode.commands.executeCommand('workbench.action.exitZenMode');
	}
}

// this method is called when your extension is deactivated
export function deactivate() {
}
