import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let defaultZoomLevel = vscode.workspace.getConfiguration('').get('window.zoomLevel');

	let startDemo = vscode.commands.registerCommand('demo-mode.startDemoMode', () => {
		vscode.commands.executeCommand('setContext', 'inDemoMode', true);
		setZoomLevel();
		setZenMode();
	});

	let endDemo = vscode.commands.registerCommand('demo-mode.endDemoMode', () => {
		vscode.commands.executeCommand('setContext', 'inDemoMode', false);
		resetZoomLevel(defaultZoomLevel);
		resetZenMode();
	});

	context.subscriptions.push(startDemo);
	context.subscriptions.push(endDemo);
}

function setZoomLevel() {
	let zoomLevelInDemoMode = vscode.workspace.getConfiguration('').get('demoMode.zoomLevel');
	vscode.workspace.getConfiguration('').update('window.zoomLevel', zoomLevelInDemoMode, true);
}

function resetZoomLevel(defaultZoomLevel: any) {
	vscode.workspace.getConfiguration('').update('window.zoomLevel', defaultZoomLevel, true);
}

function setZenMode() {
	let enableZenMode = vscode.workspace.getConfiguration('').get('demoMode.enableZenMode');
	if (enableZenMode) {
		vscode.commands.executeCommand('workbench.action.toggleZenMode');
	}
}

function resetZenMode() {
	let enableZenMode = vscode.workspace.getConfiguration('').get('demoMode.enableZenMode');
	if (enableZenMode) {
		vscode.commands.executeCommand('workbench.action.toggleZenMode');
	}
}

// this method is called when your extension is deactivated
export function deactivate() {

}
