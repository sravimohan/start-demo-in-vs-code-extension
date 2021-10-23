import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let defaultZoomLevel = vscode.workspace.getConfiguration('').get('window.zoomLevel');

	let startDemo = vscode.commands.registerCommand('start-demo.startstartDemo', () => {
		vscode.commands.executeCommand('setContext', 'instartDemo', true);
		setZoomLevel();
		setZenMode();
	});

	let endDemo = vscode.commands.registerCommand('start-demo.endstartDemo', () => {
		vscode.commands.executeCommand('setContext', 'instartDemo', false);
		resetZoomLevel(defaultZoomLevel);
		resetZenMode();
	});

	context.subscriptions.push(startDemo);
	context.subscriptions.push(endDemo);
}

function setZoomLevel() {
	let zoomLevelInstartDemo = vscode.workspace.getConfiguration('').get('startDemo.zoomLevel');
	vscode.workspace.getConfiguration('').update('window.zoomLevel', zoomLevelInstartDemo, true);
}

function resetZoomLevel(defaultZoomLevel: any) {
	vscode.workspace.getConfiguration('').update('window.zoomLevel', defaultZoomLevel, true);
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
		vscode.commands.executeCommand('workbench.action.toggleZenMode');
	}
}

// this method is called when your extension is deactivated
export function deactivate() {

}
