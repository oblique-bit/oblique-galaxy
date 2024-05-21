import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButton, MatIconButton } from "@angular/material/button";
import { ObButtonModule, ObErrorMessagesModule, ObNestedFormModule } from "@oblique/oblique";
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIcon } from "@angular/material/icon";

@Component({
	selector: "lib-reverse",
	standalone: true,
	imports: [
		ObButtonModule,
		ObErrorMessagesModule,
		ObNestedFormModule,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule,
		FormsModule,
		MatButton,
		MatLabel,
		MatIconButton,
		MatIcon

	],
	templateUrl: "./reverse.component.html",
	styleUrl: "./reverse.component.scss"
})
export class ReverseComponent {
	name = "Angular ";
	inputText = "";
	reversedInput = "";

	handleReverse() {
		this.reversedInput = this.reverseLetters(this.inputText);
	}

	reverseLetters(str: string) {
		let stack = [];
		/* for (let i = 0; i < str.length; i++) {
			stack.push(str[i]);
		} */
		stack = [...str];

		let reverseStr = "";
		while (stack.length > 0) {
			reverseStr += stack.pop();
		}
		return reverseStr;
	}
}
