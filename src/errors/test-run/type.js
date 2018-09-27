// -------------------------------------------------------------
// WARNING: this file is used by both the client and the server.
// Do not use any browser or node-specific API!
// -------------------------------------------------------------

export default {
    uncaughtErrorOnPage:                               'uncaughtErrorOnPage',
    uncaughtErrorInTestCode:                           'uncaughtErrorInTestCode',
    uncaughtNonErrorObjectInTestCode:                  'uncaughtNonErrorObjectInTestCode',
    uncaughtErrorInClientFunctionCode:                 'uncaughtErrorInClientFunctionCode',
    uncaughtErrorInCustomDOMPropertyCode:              'uncaughtErrorInCustomDOMPropertyCode',
    unhandledPromiseRejection:                         'unhandledPromiseRejection',
    uncaughtException:                                 'uncaughtException',
    missingAwaitError:                                 'missingAwaitError',
    actionIntegerOptionError:                          'actionIntegerOptionError',
    actionPositiveIntegerOptionError:                  'actionPositiveIntegerOptionError',
    actionBooleanOptionError:                          'actionBooleanOptionError',
    actionSpeedOptionError:                            'actionSpeedOptionError',
    actionOptionsTypeError:                            'actionOptionsTypeError',
    actionBooleanArgumentError:                        'actionBooleanArgumentError',
    actionStringArgumentError:                         'actionStringArgumentError',
    actionNullableStringArgumentError:                 'actionNullableStringArgumentError',
    actionStringOrStringArrayArgumentError:            'actionStringOrStringArrayArgumentError',
    actionStringArrayElementError:                     'actionStringArrayElementError',
    actionIntegerArgumentError:                        'actionIntegerArgumentError',
    actionRoleArgumentError:                           'actionRoleArgumentError',
    actionPositiveIntegerArgumentError:                'actionPositiveIntegerArgumentError',
    actionSelectorError:                               'actionSelectorError',
    actionElementNotFoundError:                        'actionElementNotFoundError',
    actionElementIsInvisibleError:                     'actionElementIsInvisibleError',
    actionSelectorMatchesWrongNodeTypeError:           'actionSelectorMatchesWrongNodeTypeError',
    actionAdditionalElementNotFoundError:              'actionAdditionalElementNotFoundError',
    actionAdditionalElementIsInvisibleError:           'actionAdditionalElementIsInvisibleError',
    actionAdditionalSelectorMatchesWrongNodeTypeError: 'actionAdditionalSelectorMatchesWrongNodeTypeError',
    actionElementNonEditableError:                     'actionElementNonEditableError',
    actionElementNotTextAreaError:                     'actionElementNotTextAreaError',
    actionElementNonContentEditableError:              'actionElementNonContentEditableError',
    actionElementIsNotFileInputError:                  'actionElementIsNotFileInputError',
    actionRootContainerNotFoundError:                  'actionRootContainerNotFoundError',
    actionIncorrectKeysError:                          'actionIncorrectKeysError',
    actionCanNotFindFileToUploadError:                 'actionCanNotFindFileToUploadError',
    actionUnsupportedDeviceTypeError:                  'actionUnsupportedDeviceTypeError',
    actionIframeIsNotLoadedError:                      'actionIframeIsNotLoadedError',
    actionElementNotIframeError:                       'actionElementNotIframeError',
    actionInvalidScrollTargetError:                    'actionInvalidScrollTargetError',
    currentIframeIsNotLoadedError:                     'currentIframeIsNotLoadedError',
    currentIframeNotFoundError:                        'currentIframeNotFoundError',
    currentIframeIsInvisibleError:                     'currentIframeIsInvisibleError',
    nativeDialogNotHandledError:                       'nativeDialogNotHandledError',
    uncaughtErrorInNativeDialogHandler:                'uncaughtErrorInNativeDialogHandler',
    setTestSpeedArgumentError:                         'setTestSpeedArgumentError',
    setNativeDialogHandlerCodeWrongTypeError:          'setNativeDialogHandlerCodeWrongTypeError',
    clientFunctionExecutionInterruptionError:          'clientFunctionExecutionInterruptionError',
    domNodeClientFunctionResultError:                  'domNodeClientFunctionResultError',
    invalidSelectorResultError:                        'invalidSelectorResultError',
    cantObtainInfoForElementSpecifiedBySelectorError:  'cantObtainInfoForElementSpecifiedBySelectorError',
    externalAssertionLibraryError:                     'externalAssertionLibraryError',
    pageLoadError:                                     'pageLoadError',
    windowDimensionsOverflowError:                     'windowDimensionsOverflowError',
    forbiddenCharactersInScreenshotPathError:          'forbiddenCharactersInScreenshotPathError',
    invalidElementScreenshotDimensionsError:           'invalidElementScreenshotDimensionsError',
    roleSwitchInRoleInitializerError:                  'roleSwitchInRoleInitializerError',
    assertionExecutableArgumentError:                  'assertionExecutableArgumentError',
    assertionUnawaitedPromiseError:                    'assertionUnawaitedPromiseError'
};
