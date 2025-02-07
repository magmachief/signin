{
    "actions": [
        {
            "actionIdentifier": "is.workflow.actions.prompt",
            "parameters": {
                "WFPromptMessage": "Enter your playstyle (e.g., aggressive, sniper):",
                "WFPromptType": "Text"
            }
        },
        {
            "actionIdentifier": "is.workflow.actions.text",
            "parameters": {
                "WFTextActionText": "Your optimized Free Fire sensitivity settings are:"
            }
        },
        {
            "actionIdentifier": "is.workflow.actions.dict",
            "parameters": {
                "WFItems": {
                    "General Sensitivity": "100",
                    "Red Dot Sensitivity": "85",
                    "2x Scope Sensitivity": "90",
                    "4x Scope Sensitivity": "80",
                    "AWM Scope Sensitivity": "60",
                    "Recoil Control Tips": "Use burst fire for better accuracy. Adjust for slight downward drag."
                }
            }
        },
        {
            "actionIdentifier": "is.workflow.actions.dict.set",
            "parameters": {
                "WFDictionary": {
                    "General Sensitivity": "100",
                    "Red Dot Sensitivity": "85",
                    "2x Scope Sensitivity": "90",
                    "4x Scope Sensitivity": "80",
                    "AWM Scope Sensitivity": "60",
                    "Recoil Control Tips": "Use burst fire for better accuracy. Adjust for slight downward drag."
                }
            }
        },
        {
            "actionIdentifier": "is.workflow.actions.text.combine",
            "parameters": {
                "WFInput": [
                    "General Sensitivity: 100",
                    "Red Dot Sensitivity: 85",
                    "2x Scope Sensitivity: 90",
                    "4x Scope Sensitivity: 80",
                    "AWM Scope Sensitivity: 60",
                    "Recoil Control Tips: Use burst fire for better accuracy. Adjust for slight downward drag."
                ],
                "WFSeparator": "\n"
            }
        },
        {
            "actionIdentifier": "is.workflow.actions.text",
            "parameters": {
                "WFTextActionText": "Here are your optimized sensitivity settings for Free Fire. Please manually input these in the game's settings."
            }
        },
        {
            "actionIdentifier": "is.workflow.actions.showresult",
            "parameters": {
                "WFInput": "Combine Text"
            }
        }
    ],
    "name": "Free Fire Sensitivity Optimizer",
    "shortcutType": "com.apple.shortcuts.workflow"
}
