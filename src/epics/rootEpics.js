import { combineEpics } from 'redux-observable';
import * as Epic from './index'

export const rootEpic = combineEpics(
    Epic.checkButtonsEpic,
    Epic.checkWireEpic,
    Epic.paperclipsGenerateEpic,
    Epic.makePaperClipEpic,
    Epic.raisePriceEpic,
    Epic.marketingNextLevelEpic,
    Epic.buyWireEpic,
    Epic.autoPaperclipsStartEpic,
    Epic.autoPaperClippersAddOneEpic,
    Epic.startAddingQOpsEpic,
    Epic.startSubtractingQOpsEpic,
    Epic.addChipEpic,
    Epic.toggleChipEpic,
    Epic.decreaseOpsEpic,
    Epic.startDecreasingOperationsEpic,
    Epic.wireButtonBufferEpic,
    Epic.autoWireBuyerEpic,
    Epic.throwMegaClippersEpic,
    Epic.startUpdatingUnsoldInventoryEpic,
    Epic.startImprovingMarketingEpic,
    Epic.catchPaperclipsEpic,
    Epic.startInvestmentsDepositEpic,
    Epic.startUpdatingScreenEpic,
    Epic.startUpdatingInvestmentLinesEpic,
    Epic.startCountingRiskEpic,
    Epic.startApplyingProfitLossEpic,
    Epic.startInvestmentsWithdrawEpic,
    Epic.chooseFromDropdownEpic,
    Epic.startAddingEmptyInvestmentsLineEpic,
    Epic.catchUnsoldInventoryEpic,
    Epic.startMegaClippersEpic,
    Epic.startNewTournamentEpic,
    Epic.startRunningStrategicModelingEpic,
    Epic.updateStrategicModelingCurrentListEpic,
    Epic.tournamentStartedEpic,
    Epic.tournamentDurationEpic,
    Epic.startUpdatingRoundsOnScreenEpic,
    Epic.startUpdatingPlayerLeftOnScreenEpic,
    Epic.startUpdatingPlayerTopOnScreenEpic,
    Epic.gameStartedEpic,
    Epic.strategicModelingResultEpic,
    Epic.startCountingResultEpic,
    Epic.countFinalResultOfEachStrategyEpic,
    Epic.updateYomiEpic,
    Epic.lastCommentEpic,
    Epic.stopSendingLastCommentsEpic
);
