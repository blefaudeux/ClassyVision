Search.setIndex({docnames:["dataset","heads","hooks","index","losses","meters","models","optim","param_scheduler","tasks","trainer","transforms"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":2,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["dataset.rst","heads.rst","hooks.rst","index.rst","losses.rst","meters.rst","models.rst","optim.rst","param_scheduler.rst","tasks.rst","trainer.rst","transforms.rst"],objects:{"classy_vision.dataset":{CIFARDataset:[0,1,1,""],ClassyDataset:[0,1,1,""],ClassyVideoDataset:[0,1,1,""],DataloaderLimitWrapper:[0,1,1,""],DataloaderSkipNoneWrapper:[0,1,1,""],DataloaderWrapper:[0,1,1,""],HMDB51Dataset:[0,1,1,""],ImageNetDataset:[0,1,1,""],ImagePathDataset:[0,1,1,""],Kinetics400Dataset:[0,1,1,""],SyntheticImageDataset:[0,1,1,""],SyntheticImageStreamingDataset:[0,1,1,""],SyntheticVideoDataset:[0,1,1,""],UCF101Dataset:[0,1,1,""],build_dataset:[0,3,1,""],register_dataset:[0,3,1,""],transforms:[11,0,0,"module-0"]},"classy_vision.dataset.CIFARDataset":{__init__:[0,2,1,""],from_config:[0,2,1,""]},"classy_vision.dataset.ClassyDataset":{__init__:[0,2,1,""],from_config:[0,2,1,""],get_batchsize_per_replica:[0,2,1,""],get_global_batchsize:[0,2,1,""],iterator:[0,2,1,""],parse_config:[0,2,1,""]},"classy_vision.dataset.ClassyVideoDataset":{__init__:[0,2,1,""],iterator:[0,2,1,""],load_metadata:[0,2,1,""],parse_config:[0,2,1,""],save_metadata:[0,2,1,""],video_clips:[0,2,1,""]},"classy_vision.dataset.DataloaderLimitWrapper":{__init__:[0,2,1,""]},"classy_vision.dataset.DataloaderSkipNoneWrapper":{__init__:[0,2,1,""]},"classy_vision.dataset.DataloaderWrapper":{__init__:[0,2,1,""]},"classy_vision.dataset.HMDB51Dataset":{__init__:[0,2,1,""],from_config:[0,2,1,""]},"classy_vision.dataset.ImageNetDataset":{__init__:[0,2,1,""],from_config:[0,2,1,""]},"classy_vision.dataset.ImagePathDataset":{__init__:[0,2,1,""],from_config:[0,2,1,""]},"classy_vision.dataset.Kinetics400Dataset":{__init__:[0,2,1,""],from_config:[0,2,1,""]},"classy_vision.dataset.SyntheticImageDataset":{__init__:[0,2,1,""],from_config:[0,2,1,""]},"classy_vision.dataset.SyntheticImageStreamingDataset":{__init__:[0,2,1,""],from_config:[0,2,1,""],iterator:[0,2,1,""]},"classy_vision.dataset.SyntheticVideoDataset":{__init__:[0,2,1,""],from_config:[0,2,1,""],video_clips:[0,2,1,""]},"classy_vision.dataset.UCF101Dataset":{__init__:[0,2,1,""],from_config:[0,2,1,""]},"classy_vision.dataset.transforms":{ApplyTransformToKey:[11,1,1,""],ClassyTransform:[11,1,1,""],GenericImageTransform:[11,1,1,""],ImagenetAugmentTransform:[11,1,1,""],ImagenetNoAugmentTransform:[11,1,1,""],LightingTransform:[11,1,1,""],TupleToMapTransform:[11,1,1,""],build_transform:[11,3,1,""],build_transforms:[11,3,1,""],register_transform:[11,3,1,""]},"classy_vision.dataset.transforms.ApplyTransformToKey":{__call__:[11,2,1,""],__init__:[11,2,1,""]},"classy_vision.dataset.transforms.ClassyTransform":{__call__:[11,2,1,""]},"classy_vision.dataset.transforms.GenericImageTransform":{__call__:[11,2,1,""],__init__:[11,2,1,""]},"classy_vision.dataset.transforms.ImagenetAugmentTransform":{__call__:[11,2,1,""],__init__:[11,2,1,""]},"classy_vision.dataset.transforms.ImagenetNoAugmentTransform":{__call__:[11,2,1,""],__init__:[11,2,1,""]},"classy_vision.dataset.transforms.LightingTransform":{__call__:[11,2,1,""],__init__:[11,2,1,""]},"classy_vision.dataset.transforms.TupleToMapTransform":{__call__:[11,2,1,""],__init__:[11,2,1,""]},"classy_vision.heads":{ClassyHead:[1,1,1,""],FullyConnectedHead:[1,1,1,""],FullyConvolutionalLinearHead:[1,1,1,""],IdentityHead:[1,1,1,""],build_head:[1,3,1,""],register_head:[1,3,1,""]},"classy_vision.heads.ClassyHead":{__init__:[1,2,1,""],forward:[1,2,1,""],from_config:[1,2,1,""]},"classy_vision.heads.FullyConnectedHead":{__init__:[1,2,1,""],forward:[1,2,1,""],from_config:[1,2,1,""]},"classy_vision.heads.FullyConvolutionalLinearHead":{__init__:[1,2,1,""],forward:[1,2,1,""],from_config:[1,2,1,""]},"classy_vision.heads.IdentityHead":{forward:[1,2,1,""],from_config:[1,2,1,""]},"classy_vision.hooks":{CheckpointHook:[2,1,1,""],ClassyHook:[2,1,1,""],ClassyHookFunctions:[2,1,1,""],ExponentialMovingAverageModelHook:[2,1,1,""],LossLrMeterLoggingHook:[2,1,1,""],ModelComplexityHook:[2,1,1,""],ModelTensorboardHook:[2,1,1,""],ProfilerHook:[2,1,1,""],ProgressBarHook:[2,1,1,""],TensorboardPlotHook:[2,1,1,""],VisdomHook:[2,1,1,""],build_hook:[2,3,1,""],register_hook:[2,3,1,""]},"classy_vision.hooks.CheckpointHook":{__init__:[2,2,1,""],on_end:[2,2,1,""],on_phase_end:[2,2,1,""],on_phase_start:[2,2,1,""],on_start:[2,2,1,""],on_step:[2,2,1,""]},"classy_vision.hooks.ClassyHook":{__init__:[2,2,1,""],get_classy_state:[2,2,1,""],name:[2,2,1,""],on_end:[2,2,1,""],on_phase_end:[2,2,1,""],on_phase_start:[2,2,1,""],on_start:[2,2,1,""],on_step:[2,2,1,""],set_classy_state:[2,2,1,""]},"classy_vision.hooks.ExponentialMovingAverageModelHook":{__init__:[2,2,1,""],get_model_state_iterator:[2,2,1,""],on_end:[2,2,1,""],on_phase_end:[2,2,1,""],on_phase_start:[2,2,1,""],on_start:[2,2,1,""],on_step:[2,2,1,""],set_model_state:[2,2,1,""]},"classy_vision.hooks.LossLrMeterLoggingHook":{__init__:[2,2,1,""],on_end:[2,2,1,""],on_phase_end:[2,2,1,""],on_phase_start:[2,2,1,""],on_start:[2,2,1,""],on_step:[2,2,1,""]},"classy_vision.hooks.ModelComplexityHook":{on_end:[2,2,1,""],on_phase_end:[2,2,1,""],on_phase_start:[2,2,1,""],on_start:[2,2,1,""],on_step:[2,2,1,""]},"classy_vision.hooks.ModelTensorboardHook":{__init__:[2,2,1,""],from_config:[2,2,1,""],on_end:[2,2,1,""],on_phase_end:[2,2,1,""],on_phase_start:[2,2,1,""],on_start:[2,2,1,""],on_step:[2,2,1,""]},"classy_vision.hooks.ProfilerHook":{on_end:[2,2,1,""],on_phase_end:[2,2,1,""],on_phase_start:[2,2,1,""],on_start:[2,2,1,""],on_step:[2,2,1,""]},"classy_vision.hooks.ProgressBarHook":{__init__:[2,2,1,""],on_end:[2,2,1,""],on_phase_end:[2,2,1,""],on_phase_start:[2,2,1,""],on_start:[2,2,1,""],on_step:[2,2,1,""]},"classy_vision.hooks.TensorboardPlotHook":{__init__:[2,2,1,""],from_config:[2,2,1,""],on_end:[2,2,1,""],on_phase_end:[2,2,1,""],on_phase_start:[2,2,1,""],on_start:[2,2,1,""],on_step:[2,2,1,""]},"classy_vision.hooks.VisdomHook":{__init__:[2,2,1,""],on_end:[2,2,1,""],on_phase_end:[2,2,1,""],on_phase_start:[2,2,1,""],on_start:[2,2,1,""],on_step:[2,2,1,""]},"classy_vision.losses":{BarronLoss:[4,1,1,""],ClassyLoss:[4,1,1,""],LabelSmoothingCrossEntropyLoss:[4,1,1,""],MultiOutputSumLoss:[4,1,1,""],SoftTargetCrossEntropyLoss:[4,1,1,""],SumArbitraryLoss:[4,1,1,""],build_loss:[4,3,1,""],register_loss:[4,3,1,""]},"classy_vision.losses.BarronLoss":{__init__:[4,2,1,""],forward:[4,2,1,""],from_config:[4,2,1,""]},"classy_vision.losses.ClassyLoss":{__init__:[4,2,1,""],forward:[4,2,1,""],from_config:[4,2,1,""],get_classy_state:[4,2,1,""],get_optimizer_params:[4,2,1,""],has_learned_parameters:[4,2,1,""],set_classy_state:[4,2,1,""]},"classy_vision.losses.LabelSmoothingCrossEntropyLoss":{__init__:[4,2,1,""],compute_valid_targets:[4,2,1,""],forward:[4,2,1,""],from_config:[4,2,1,""],smooth_targets:[4,2,1,""]},"classy_vision.losses.MultiOutputSumLoss":{__init__:[4,2,1,""],forward:[4,2,1,""],from_config:[4,2,1,""]},"classy_vision.losses.SoftTargetCrossEntropyLoss":{__init__:[4,2,1,""],forward:[4,2,1,""],from_config:[4,2,1,""]},"classy_vision.losses.SumArbitraryLoss":{__init__:[4,2,1,""],forward:[4,2,1,""],from_config:[4,2,1,""]},"classy_vision.meters":{AccuracyMeter:[5,1,1,""],ClassyMeter:[5,1,1,""],PrecisionAtKMeter:[5,1,1,""],RecallAtKMeter:[5,1,1,""],VideoAccuracyMeter:[5,1,1,""],build_meter:[5,3,1,""],register_meter:[5,3,1,""]},"classy_vision.meters.AccuracyMeter":{__init__:[5,2,1,""],from_config:[5,2,1,""],get_classy_state:[5,2,1,""],name:[5,2,1,""],reset:[5,2,1,""],set_classy_state:[5,2,1,""],sync_state:[5,2,1,""],update:[5,2,1,""],validate:[5,2,1,""],value:[5,2,1,""]},"classy_vision.meters.ClassyMeter":{from_config:[5,2,1,""],get_classy_state:[5,2,1,""],name:[5,2,1,""],reset:[5,2,1,""],set_classy_state:[5,2,1,""],sync_state:[5,2,1,""],update:[5,2,1,""],validate:[5,2,1,""],value:[5,2,1,""]},"classy_vision.meters.PrecisionAtKMeter":{__init__:[5,2,1,""],from_config:[5,2,1,""],get_classy_state:[5,2,1,""],name:[5,2,1,""],reset:[5,2,1,""],set_classy_state:[5,2,1,""],sync_state:[5,2,1,""],update:[5,2,1,""],validate:[5,2,1,""],value:[5,2,1,""]},"classy_vision.meters.RecallAtKMeter":{__init__:[5,2,1,""],from_config:[5,2,1,""],get_classy_state:[5,2,1,""],name:[5,2,1,""],reset:[5,2,1,""],set_classy_state:[5,2,1,""],sync_state:[5,2,1,""],update:[5,2,1,""],validate:[5,2,1,""],value:[5,2,1,""]},"classy_vision.meters.VideoAccuracyMeter":{__init__:[5,2,1,""],from_config:[5,2,1,""],meter:[5,2,1,""],name:[5,2,1,""]},"classy_vision.models":{ClassyBlock:[6,1,1,""],ClassyModel:[6,1,1,""],ClassyModelEvaluationMode:[6,1,1,""],ClassyModelHeadExecutorWrapper:[6,1,1,""],ClassyModelWrapper:[6,1,1,""],DenseNet:[6,1,1,""],MLP:[6,1,1,""],ResNeXt3D:[6,1,1,""],ResNeXt:[6,1,1,""],ResNet:[6,1,1,""],SqueezeAndExcitationLayer:[6,1,1,""],build_model:[6,3,1,""],register_model:[6,3,1,""]},"classy_vision.models.ClassyBlock":{__init__:[6,2,1,""],forward:[6,2,1,""]},"classy_vision.models.ClassyModel":{__init__:[6,2,1,""],attachable_block_names:[6,2,1,""],evaluation_mode:[6,2,1,""],extract_features:[6,2,1,""],forward:[6,2,1,""],from_config:[6,2,1,""],from_model:[6,2,1,""],get_classy_state:[6,2,1,""],get_heads:[6,2,1,""],get_optimizer_params:[6,2,1,""],head_outputs:[6,2,1,""],input_shape:[6,2,1,""],load_head_states:[6,2,1,""],model_depth:[6,2,1,""],output_shape:[6,2,1,""],set_classy_state:[6,2,1,""],set_heads:[6,2,1,""],wrapper_cls:[6,4,1,""]},"classy_vision.models.ClassyModelWrapper":{__call__:[6,2,1,""],__init__:[6,2,1,""]},"classy_vision.models.DenseNet":{__init__:[6,2,1,""],forward:[6,2,1,""],from_config:[6,2,1,""],get_optimizer_params:[6,2,1,""],input_shape:[6,2,1,""],model_depth:[6,2,1,""],output_shape:[6,2,1,""]},"classy_vision.models.MLP":{__init__:[6,2,1,""],forward:[6,2,1,""],from_config:[6,2,1,""],input_shape:[6,2,1,""],model_depth:[6,2,1,""],output_shape:[6,2,1,""]},"classy_vision.models.ResNeXt":{__init__:[6,2,1,""],forward:[6,2,1,""],from_config:[6,2,1,""],get_classy_state:[6,2,1,""],get_optimizer_params:[6,2,1,""],input_shape:[6,2,1,""],model_depth:[6,2,1,""],output_shape:[6,2,1,""],set_classy_state:[6,2,1,""]},"classy_vision.models.ResNeXt3D":{__init__:[6,2,1,""],from_config:[6,2,1,""]},"classy_vision.models.ResNet":{__init__:[6,2,1,""]},"classy_vision.models.SqueezeAndExcitationLayer":{__init__:[6,2,1,""],forward:[6,2,1,""]},"classy_vision.optim":{Adam:[7,1,1,""],ClassyOptimizer:[7,1,1,""],RMSProp:[7,1,1,""],RMSPropTF:[7,1,1,""],SGD:[7,1,1,""],build_optimizer:[7,3,1,""],param_scheduler:[8,0,0,"-"],register_optimizer:[7,3,1,""]},"classy_vision.optim.Adam":{__init__:[7,2,1,""],from_config:[7,2,1,""],init_pytorch_optimizer:[7,2,1,""]},"classy_vision.optim.ClassyOptimizer":{__init__:[7,2,1,""],backward:[7,2,1,""],from_config:[7,2,1,""],get_classy_state:[7,2,1,""],init_pytorch_optimizer:[7,2,1,""],set_classy_state:[7,2,1,""],set_param_schedulers:[7,2,1,""],step:[7,2,1,""],update_schedule_on_epoch:[7,2,1,""],update_schedule_on_step:[7,2,1,""],zero_grad:[7,2,1,""]},"classy_vision.optim.RMSProp":{__init__:[7,2,1,""],from_config:[7,2,1,""],init_pytorch_optimizer:[7,2,1,""]},"classy_vision.optim.RMSPropTF":{__init__:[7,2,1,""],from_config:[7,2,1,""],init_pytorch_optimizer:[7,2,1,""]},"classy_vision.optim.SGD":{__init__:[7,2,1,""],from_config:[7,2,1,""],init_pytorch_optimizer:[7,2,1,""]},"classy_vision.optim.param_scheduler":{ClassyParamScheduler:[8,1,1,""],CompositeParamScheduler:[8,1,1,""],ConstantParamScheduler:[8,1,1,""],CosineParamScheduler:[8,1,1,""],IntervalScaling:[8,1,1,""],LinearParamScheduler:[8,1,1,""],MultiStepParamScheduler:[8,1,1,""],PolynomialDecayParamScheduler:[8,1,1,""],StepParamScheduler:[8,1,1,""],StepWithFixedGammaParamScheduler:[8,1,1,""],UpdateInterval:[8,1,1,""],build_param_scheduler:[8,3,1,""],register_param_scheduler:[8,3,1,""]},"classy_vision.optim.param_scheduler.ClassyParamScheduler":{__call__:[8,2,1,""],__init__:[8,2,1,""],from_config:[8,2,1,""],update_interval:[8,4,1,""]},"classy_vision.optim.param_scheduler.CompositeParamScheduler":{__call__:[8,2,1,""],__init__:[8,2,1,""],from_config:[8,2,1,""]},"classy_vision.optim.param_scheduler.ConstantParamScheduler":{__call__:[8,2,1,""],__init__:[8,2,1,""],from_config:[8,2,1,""]},"classy_vision.optim.param_scheduler.CosineParamScheduler":{__call__:[8,2,1,""],__init__:[8,2,1,""],from_config:[8,2,1,""]},"classy_vision.optim.param_scheduler.LinearParamScheduler":{__call__:[8,2,1,""],__init__:[8,2,1,""],from_config:[8,2,1,""]},"classy_vision.optim.param_scheduler.MultiStepParamScheduler":{__call__:[8,2,1,""],__init__:[8,2,1,""],from_config:[8,2,1,""]},"classy_vision.optim.param_scheduler.PolynomialDecayParamScheduler":{__call__:[8,2,1,""],__init__:[8,2,1,""],from_config:[8,2,1,""]},"classy_vision.optim.param_scheduler.StepParamScheduler":{__call__:[8,2,1,""],__init__:[8,2,1,""],from_config:[8,2,1,""]},"classy_vision.optim.param_scheduler.StepWithFixedGammaParamScheduler":{__call__:[8,2,1,""],__init__:[8,2,1,""],from_config:[8,2,1,""]},"classy_vision.optim.param_scheduler.UpdateInterval":{EPOCH:[8,4,1,""],STEP:[8,4,1,""]},"classy_vision.tasks":{ClassificationTask:[9,1,1,""],ClassyTask:[9,1,1,""],FineTuningTask:[9,1,1,""],build_task:[9,3,1,""],register_task:[9,3,1,""]},"classy_vision.tasks.ClassificationTask":{__init__:[9,2,1,""],advance_phase:[9,2,1,""],build_dataloader:[9,2,1,""],build_dataloaders:[9,2,1,""],create_data_iterator:[9,2,1,""],done_training:[9,2,1,""],eval_phase_idx:[9,2,1,""],eval_step:[9,2,1,""],from_config:[9,2,1,""],get_batchsize_per_replica:[9,2,1,""],get_classy_state:[9,2,1,""],get_data_iterator:[9,2,1,""],get_global_batchsize:[9,2,1,""],get_total_test_phases:[9,2,1,""],get_total_training_phases:[9,2,1,""],init_distributed_data_parallel_model:[9,2,1,""],model:[9,2,1,""],num_batches_per_phase:[9,2,1,""],on_end:[9,2,1,""],on_phase_end:[9,2,1,""],on_phase_start:[9,2,1,""],on_start:[9,2,1,""],phase_type:[9,2,1,""],prepare:[9,2,1,""],set_amp_args:[9,2,1,""],set_checkpoint:[9,2,1,""],set_classy_state:[9,2,1,""],set_dataset:[9,2,1,""],set_distributed_options:[9,2,1,""],set_hooks:[9,2,1,""],set_loss:[9,2,1,""],set_meters:[9,2,1,""],set_model:[9,2,1,""],set_num_epochs:[9,2,1,""],set_optimizer:[9,2,1,""],set_test_only:[9,2,1,""],set_test_phase_period:[9,2,1,""],train_step:[9,2,1,""],where:[9,2,1,""]},"classy_vision.tasks.ClassyTask":{__init__:[9,2,1,""],done_training:[9,2,1,""],eval_step:[9,2,1,""],from_config:[9,2,1,""],get_classy_state:[9,2,1,""],on_end:[9,2,1,""],on_phase_end:[9,2,1,""],on_phase_start:[9,2,1,""],on_start:[9,2,1,""],prepare:[9,2,1,""],run_hooks:[9,2,1,""],set_classy_state:[9,2,1,""],train_step:[9,2,1,""],where:[9,2,1,""]},"classy_vision.tasks.FineTuningTask":{__init__:[9,2,1,""],from_config:[9,2,1,""],prepare:[9,2,1,""]},"classy_vision.trainer":{ClassyTrainer:[10,1,1,""],DistributedTrainer:[10,1,1,""],LocalTrainer:[10,1,1,""]},"classy_vision.trainer.ClassyTrainer":{__init__:[10,2,1,""],train:[10,2,1,""]},"classy_vision.trainer.DistributedTrainer":{__init__:[10,2,1,""]},"classy_vision.trainer.LocalTrainer":{__init__:[10,2,1,""]},classy_vision:{dataset:[0,0,0,"-"],heads:[1,0,0,"-"],hooks:[2,0,0,"-"],losses:[4,0,0,"-"],meters:[5,0,0,"-"],models:[6,0,0,"-"],optim:[7,0,0,"-"],tasks:[9,0,0,"-"],trainer:[10,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute"},terms:{"15th":6,"1st":6,"1x1":6,"1x1x1":1,"2nd":6,"32x32":6,"3x3":6,"abstract":[0,2,3,9,11],"boolean":9,"case":[0,6,11],"class":[0,1,2,4,5,6,7,8,9,10,11],"default":[2,4,5,6,8,9,11],"enum":[8,9],"final":6,"float":[0,2,7,8,9,11],"function":[0,1,2,4,6,7,8,9,11],"int":[0,1,2,5,6,8,9,10,11],"long":0,"new":[10,11],"public":0,"return":[0,1,2,4,5,6,7,8,9,11],"super":[2,7],"true":[0,2,5,6,9,10],"while":6,AWS:10,But:11,For:[0,1,2,4,5,6,7,8,9,11],Its:0,One:9,Such:0,That:10,The:[0,2,4,5,6,7,8,9,11],Then:8,These:6,Use:0,Used:[6,9],Useful:[0,6],Using:7,Will:9,__call__:[6,8,11],__init__:[0,1,2,4,5,6,7,8,9,10,11],_for:7,_get_sampl:0,abl:11,about:[2,3],access:[0,6],accompani:11,accord:[4,8],accuarci:5,accur:[0,2,6,11],accuraci:[0,5],accuracy_met:5,accuracymet:5,across:9,act:6,action:0,activ:[1,2,6],activation_func:1,actual:[0,5,11],adam:7,adaptiveavgpool2d:1,add:[2,7],added:[0,2,4],addit:[0,2,4,11],advanc:6,advance_phas:9,after:[0,1,2,5,7,8,9,11],afterward:6,again:11,agnost:8,alexnet:11,alia:6,all:[0,2,4,5,6,7,8,9],allow:[0,1,2,4,5,6,7,8,9,10,11],along:9,alpha:[4,7],alphastd:11,alreadi:[0,11],also:[0,2,4,6,7,8,10,11],although:6,alwai:2,among:[5,8],amp:9,amp_arg:9,amsgrad:7,ani:[0,1,2,4,5,6,7,8,9,11],anoth:0,anyth:2,apex:9,api:9,append:2,appli:[0,1,2,4,5,6,7,8,9,11],applytransformtokei:11,appropri:[2,7,9],arbitrarili:0,architectur:6,arg:[0,2,6,9],argument:[0,2,6,9,11],around:0,arrang:0,arxiv:6,associ:[7,9],assum:[0,1,2,4,5,6,7,8,9,11],attach:[1,6],attachable_block_nam:6,attribut:[0,6,9],audio:0,audio_channel:0,audio_sampl:0,augment:11,autograd:7,automat:9,avail:[4,10,11],averag:[1,2,5,6],avgpool3d:1,avi:0,avoid:7,backward:[2,7],bar:[1,2,4,5,6,7,8,9,11],barron:4,barron_loss:4,barronloss:4,base:[0,1,2,4,5,6,7,8,9,10,11],base_model:9,base_valu:8,base_width_and_cardin:6,basi:6,basic:9,basic_lay:6,batch:[0,2,5,7,8,9],batch_norm_sync_mod:9,batchnorm3d:6,batchnorm:6,batchnormsyncmod:9,batchsiz:9,batchsize_per_replica:0,becaus:0,been:[0,2,7],befor:[0,2,6,8,9,11],behav:0,behavior:[2,6,11],being:0,below:2,beta:7,between:[0,4,6,8,9],binari:0,block15:6,block:6,block_idx:6,bn_weight_decai:[4,6],bookkeep:9,bool:[0,1,2,4,6,7,9,10],both:[0,6],bottlenecktransform:6,boundari:8,breakdown:2,broadcast:9,broadcast_buffers_mod:9,broadcastbuffersmod:9,buffer:[2,9],build:[0,1,2,4,5,6,7,8,9,11],build_dataload:9,build_dataset:0,build_head:1,build_hook:2,build_loss:4,build_met:5,build_model:6,build_optim:7,build_param_schedul:[7,8],build_task:9,build_transform:[0,11],buildss:9,built:[0,11],bulk:6,cach:6,caffe2:11,calcul:[4,5,9],call:[0,1,2,4,5,6,7,8,9,11],callabl:[0,7,11],can:[0,1,2,3,4,5,6,7,8,9,11],care:6,center:7,centercrop:11,central:11,chang:[1,6,8],channel:[0,6],check:[0,5,10],checkpoint:[2,4,5,6,7,9],checkpoint_fold:2,checkpoint_period:2,checkpointhook:2,child:5,chronolog:2,cifardataset:0,class_ratio:0,classi:[0,1,2,4,5,6,7,8,9,11],classif:[5,9,11],classifi:[6,9],classification_task:9,classificationtask:9,classifier_head1:6,classifier_head2:6,classmethod:[0,1,2,4,5,6,7,8,9],classy_cifar:0,classy_dataset:[0,9],classy_head:[1,6],classy_hmdb51:0,classy_imagenet:0,classy_kinetics400:0,classy_loss:[4,7,9],classy_met:5,classy_model:[6,7,9],classy_optim:[7,9],classy_synthetic_imag:0,classy_synthetic_video:0,classy_task:[9,10],classy_ucf101:0,classy_vis:[0,1,2,4,5,6,7,8,9,10,11],classy_vision_param_schedul:[7,8],classyblock:[1,6],classydataset:[0,5,9],classyhead:[1,6],classyhook:[2,9],classyhookfunct:[2,9],classyloss:[4,7,9],classymet:[5,9],classymodel:[1,5,6,7,9],classymodelevaluationmod:6,classymodelheadexecutorwrapp:6,classymodelwrapp:6,classyoptim:[7,9],classyparamschedul:[7,8],classytask:[7,9,10],classytrain:[9,10],classytransform:11,classyvideodataset:0,classyvis:0,clear:[2,7],clip:[0,5,6],clip_crop_s:6,clips_per_video:0,clips_per_video_test:5,clips_per_video_train:5,closur:7,cluster:10,code:10,collect:[0,2,4],combin:[0,10],come:0,common:[0,11],commun:5,compar:[0,5],complet:[6,8,9],compon:9,compos:[8,11],composit:8,composite_schedul:8,compositeparamschedul:8,comput:[0,4,5,6,7,9,10],compute_valid_target:4,condit:9,config:[0,1,2,4,5,6,7,8,9,10,11],configur:[0,1,2,4,5,6,7,8,9,10,11],connect:[1,6],consid:0,consider_bn_buff:2,consist:6,consit:0,constant:8,constant_schedul:8,constantparamschedul:8,construct:[1,9],constructor:[0,1,2,4,6,7,8,10,11],consum:[0,5],contain:[0,2,4,5,6,7,9,10,11],context:9,contigu:6,contribut:4,control:[7,10],conv3d:6,conv:6,conveni:11,convent:6,convert:6,convolut:[1,6],coordin:5,copi:[2,6,9],correct:7,correspond:[2,4,6,8,9,11],cosin:8,cosine_decai:8,cosine_schedul:8,cosineparamschedul:8,could:[5,6],count:[2,9],counter:9,cover:11,cpu:[2,6,10],creat:[2,6,7,9],create_data_iter:9,crop:[6,11],crop_siz:[0,11],cross:4,crossentropyloss:4,cuda:9,current:[9,10],current_phase_id:0,curv:9,custom:[6,9],custom_hook:2,customhook:2,data1:11,data2:11,data:[0,2,9,11],data_iter:9,dataload:[0,5,9,10],dataloader_mp_context:[9,10],dataloaderlimitwrapp:0,dataloaderskipnonewrapp:0,dataloaderwrapp:0,dataset:[1,3,9,11],datatload:0,ddp:9,deadlock:5,decai:[2,6,7,8],decid:[0,10],decor:[0,1,2,4,5,6,7,8,9,11],decreas:4,deep:[6,9],deep_copi:[6,9],def:2,defin:[0,1,6,11],deleg:10,denot:11,dens:6,densenet:6,depend:[2,10],deriv:[2,6,7,9],desir:[0,1],detail:[0,1,4,6,9],determin:[0,1,2,4,5,6,7,8,9,10,11],deviat:11,devic:[2,7],dict:[0,1,2,4,5,6,7,8,9,11],dictionari:[2,4,5,6,7,9],differ:[0,2,6,10],dimens:[6,11],directli:11,directori:0,disabl:9,displai:2,distribut:[0,5,9,10],distributed_model:9,distributeddataparallel:9,distributedtrain:10,divid:8,divis:11,doc:7,document:[0,6,9],doe:[4,5,9,11],doing:10,done:[9,10],done_train:9,download:0,downstream:6,drop:0,dropout:[1,6],dure:[1,2,4,5,6,9,11],each:[0,2,4,5,6,7,8,9],eigen:11,eigval:11,eigvec:11,either:[0,2,5,6,8],element:[0,4],ema:2,enabl:[0,1,6,9],encapsul:9,encapsult:9,encod:5,encourag:4,end:[2,5,7,8,9],end_valu:8,entri:[4,11],entropi:4,enumer:[2,6,8],env:2,environ:[2,10],epoch:[0,2,7,8,9],eps:7,equal:8,especi:7,etc:[5,9,10],eval_phase_idx:9,eval_step:9,evalu:[7,9],evaluation_mod:6,even:[0,1,2,4,5,6,7,8,9,11],evenli:[0,8],everi:[0,2,5,6,7,8],everyth:10,exact:8,exactli:[0,10],exampl:[0,2,4,6,8],excit:6,exclud:[6,8],execut:[6,9],exhaust:[0,3],expand:[4,11],expans:6,expect:[0,1,2,4,5,6,7,8,9,11],experi:11,exponenti:2,exponentialmovingaveragemodelhook:2,express:11,extend:7,extens:0,extract:[1,6],extract_featur:6,factor:2,fals:[0,1,4,6,7,9],famili:6,far:[8,9],faster:0,featur:[1,6,9],fetch:0,few:11,field:11,file:[0,1,2,4,5,6,7,8,9,11],filepath:0,filesystem:0,final_bn_relu:6,find:[0,1,2,4,5,6,7,8,9,11],find_unused_paramet:9,fine:6,fine_tuning_task:9,finetuningtask:9,first:[0,6,8,9,11],first_batchnorm:6,first_dropout:6,fix:[0,8],flag:9,flexibl:2,flip:11,flop:2,fold:0,folder:[0,2],follow:[0,1,2,4,6,11],foo:[1,2,4,5,6,7,8,9,11],fork:[6,9,10],forkserv:[9,10],form:[1,11],format:[0,6,11],former:6,forward:[1,2,4,6,9],found:0,fps:0,frame:[0,6],frame_r:0,frames_per_clip:[0,6],framework:[0,1,2,4,5,6,7,8,9,11],frequenc:8,from:[0,1,2,4,5,6,7,8,9,10,11],from_config:[0,1,2,4,5,6,7,8,9,11],from_model:6,full:0,fulli:[1,6],fully_connect:6,fully_connected_head:1,fully_convolutional_linear_head:1,fullyconnectedhead:1,fullyconvolutionallinearhead:1,gamma:8,gap:4,gener:[0,4,10],genericimagetransform:11,genericimagetransfrom:11,get:[0,2,4,5,6,7,8,9,11],get_batchsize_per_replica:[0,9],get_block:6,get_classy_st:[2,4,5,6,7,9],get_data_iter:9,get_global_batchs:[0,9],get_head:6,get_model_state_iter:2,get_optimizer_param:[4,6,7],get_total_test_phas:9,get_total_training_phas:9,github:9,give:0,given:[0,5,8],global:[0,2,5,9],gpu:[2,9,10],gradient:7,graph:2,ground:5,groundtruth:5,group:[6,7],growth_rat:6,half:9,handl:7,has:[0,7,8,9,11],has_learned_paramet:4,have:[0,2,4,5,6,8,9,10],head:[3,6],head_id:6,head_output:6,heads_stat:6,height:0,help:[0,2,6,11],helper:9,here:9,hidden_dim:6,high:3,histori:9,hmdb51:0,hmdb51dataset:0,hook:[3,6,9],hook_config:2,hook_funct:9,horizont:11,host:2,hot:[4,5],hour:0,how:[3,8,9,10],howev:[0,11],html:[2,7,9],http:[2,6,7,9],hyperparamet:6,identifi:1,identity_head:1,identityhead:1,idx:[6,9],ignor:[4,6],ignore_index:4,imag:[0,5,6,11],image_path:0,imagefold:[0,11],imageinputop:11,imagenet:11,imagenetaugmenttransform:11,imagenetdataset:0,imagenetnoaugmenttransform:11,imagepathdataset:0,img:11,implement:[0,4,5,6,11],in_plan:[1,6],includ:[2,5],increas:[2,8],increment:9,independ:0,index:[3,4,6],indic:[0,4],infer:[0,1,6,10],info:9,infomr:0,inform:[2,3,6,7,9],inherit:[9,10],init_distributed_data_parallel_model:9,init_plan:6,init_pytorch_optim:7,initi:[0,2,6,7,9,11],inject:2,input:[0,1,4,6,11],input_arg:2,input_dim:6,input_kei:6,input_plan:6,input_shap:6,instal:9,instanc:[0,1,2,4,5,6,7,8,9,10,11],instanti:[0,1,2,4,5,6,7,8,9,11],instead:6,integ:[0,5],integr:11,interfac:[0,11],intermedi:8,intern:[5,6],interpol:8,interv:8,interval_sc:8,intervalsc:8,intial:4,involv:5,isn:0,item:[0,2,11],iter:[0,2,9],iterabledataset:9,its:5,itself:[0,1,2,4,5,6,7,8,9,11],just:11,keep:[0,2],kei:[0,1,2,4,5,6,7,8,9,11],kernel:[1,6],key1:11,key2:11,kinet:0,kinetics400:0,kinetics400dataset:0,known:0,kwarg:[0,2,5,6,7,9],label:[4,5],label_smoothing_loss:4,labelsmoothingcrossentropyloss:4,lambda:2,larc_config:7,larg:0,larger:1,last:[5,6],latest:2,latter:6,launch:10,layer:[1,6],learn:[1,2,4,7,8],learning_r:2,left:7,len:9,length:[0,8,11],less:8,let:6,level:[3,5],light:11,lightingtransform:11,like:[0,1,2,4,5,6,7,8,9,11],limit:0,line:2,linear:[1,8],linear_schedul:8,linearli:8,linearparamschedul:8,list:[0,1,2,4,5,6,8,9,11],list_of_map_kei:11,live:[2,6],load:[0,2,4,5,6,7,9],load_head_st:6,load_metadata:0,local:[0,5,9],local_vari:9,localtrain:10,locat:0,log:[2,9],log_freq:2,log_period:2,logic:6,logit:5,longer:0,look:6,loop:[2,9,10],loss:[2,3,5,7,9,10],losslrmeterlogginghook:2,machin:10,mai:[0,9],main:[2,9,10],make:[2,6,9],map:[6,9,11],match:[0,11],max:6,mean:[9,11],measur:[2,5,9],memori:[2,9],meta:0,metadata:0,metadata_filepath:0,meter:[2,3,9],method:[0,1,2,6,7,11],metric:[2,5],might:1,mileston:8,millisecond:2,min:0,minut:0,mix:9,mlp:6,mode:9,model:[0,1,2,3,4,7,9,11],model_depth:6,model_output:5,model_output_shap:5,model_tensorboard_hook:2,modelcomplexityhook:2,modeltensorboardhook:2,modifi:6,modul:[1,2,3,4,6,11],momentum:7,more:[0,1,4,6,7,9],most:[0,4,11],move:[0,2,7],mp4:0,much:0,multi:5,multi_output_sum_loss:4,multi_step_schedul:8,multilabel:4,multioutpusumloss:4,multioutputsumloss:4,multipl:[1,5,6,10],multiprocess:9,multiprocessing_context:9,multistepparamschedul:8,must:[0,1,2,4,5,6,7,8,9,10],my_dataset:0,my_head:1,my_hook:2,my_lambda:2,my_loss:4,my_met:5,my_model:6,my_optim:7,my_schedul:8,my_task:9,my_transform:11,mydataset:0,myhead:1,myhook:2,myloss:4,myoptim:7,myparamschedul:8,mytask:9,mytransform:11,name:[0,1,2,4,5,6,7,8,9,11],necessari:0,necessarili:2,need:[0,2,4,6,9,10,11],nesterov:7,network:6,next:0,nois:11,none:[0,1,2,4,5,6,7,8,9,10,11],norm:[2,7],normal:[4,5,6,9,11],normalize_target:4,note:[0,4,5,6,8],noth:5,num_batches_per_phas:9,num_block:6,num_class:[0,1,5,6],num_dataloader_work:[9,10],num_decai:8,num_epoch:[7,8,9],num_group:6,num_sampl:0,num_upd:9,num_work:9,number:[0,1,2,6,8,9,10],nvidia:9,nx1:4,nxc:4,object:[4,5,6,9],observ:2,obtain:9,occur:5,often:[8,11],on_end:[2,9],on_phase_end:[2,9],on_phase_start:[2,9],on_start:[2,9],on_step:2,onc:0,one:[0,1,4,5,6,8,9,10,11],onli:[0,2,5,6,7,8,9,10,11],oper:6,opt_level:9,optim:[2,3,4,6,8,9],option:[0,1,2,4,6,7,8,9,10,11],order:[0,2,6,8,11],org:[2,6,7],organ:2,origin:[0,11],orign:0,other:[0,1,5,11],otherwis:[6,9],our:3,out:0,outer:10,output:[1,2,4,5,6,7,9,11],output_dim:6,output_shap:6,over:[0,2,6,9],overal:0,overrid:[6,7],overridden:6,own:5,page:3,paper:11,paradigm:6,parallel:9,param:[2,3,4,6,7,9,11],param_schedul:[7,8],paramat:2,paramet:[0,1,2,4,5,6,7,8,9,10,11],parent:[9,10],pars:0,parse_config:0,part:[0,1,2,4,5,6,7,8,9,11],particular:[8,9],pass:[0,2,6,7,9,11],path:0,pathawai:6,pca:11,pdf:6,per:[0,5,6,9,10,11],percent:8,percentag:8,perf_log:9,perform:[1,5,6,7,9,10],period:9,phase:[0,2,5,9,10],phase_idx:9,phase_typ:[2,9],pil:11,pin:9,pin_memori:9,pixel:11,place:2,pleas:3,plot:2,plu:[5,8],point:8,polynomi:8,polynomial_decay_schedul:8,polynomialdecayparamschedul:8,pool:[1,6],pool_siz:1,popul:9,port:2,portion:10,posit:0,post:6,power:8,pre:[0,6,11],precis:[5,9],precision_met:5,precisionatkmet:5,predefin:8,predict:[4,5],prepar:[0,9],present:[0,4],pretrain:1,probabl:5,problem:1,process:[2,5,9,10,11],produc:0,product:6,profil:2,profilerhook:2,progress:[2,7,8,9],progressbarhook:2,project:1,properti:[0,2,5,6,9],proport:9,provid:[0,4,5,6,7,11],purpos:11,python:[0,2,5,9],pytorch:[1,6,7,9,11],rais:[0,9],random:[0,11],randomli:[0,5,11],rang:[8,9,11],rare:4,rate:[0,2,7,8],ratio:[0,6],raw:4,read:0,readthedoc:2,real:0,rebuild:9,recal:5,recall_met:5,recallatkmet:5,recip:6,recognit:0,record:6,reduct:[4,6],reduction_ratio:6,refer:[1,4,6],regist:[0,1,2,4,5,6,7,8,9,11],register_dataset:0,register_head:1,register_hook:2,register_loss:4,register_met:5,register_model:6,register_optim:7,register_param_schedul:8,register_task:9,register_transform:11,regular:[1,6,7],regularized_param:6,relu:6,remain:6,rendezv:10,replac:0,replica:[0,9],repres:[0,5,8,9,11],requir:[0,11],rescal:[0,8],research:11,reset:[5,9],residu:6,residual_transformation_typ:6,residualnet:6,resiz:11,reslt:5,resn:6,resnet50:6,resnet:6,resnext3d:6,resnext:6,resolut:0,resolv:5,respect:[0,7],respons:10,restrict:0,result:[1,5],reus:0,rgb:[6,11],rich:2,rmsprop:7,rmsprop_tf:7,rmsproptf:7,root:0,run:[6,8,9,10],run_hook:9,runtim:2,runtimeerror:[0,9],same:[0,1,4,8,9,11],sampl:[0,2,4,5,9,11],sampler:0,save:[0,2,4],save_metadata:0,scale:[8,11],schedul:[3,7],score:4,scriptmodul:6,se_reduction_ratio:6,search:3,second:[0,6,11],see:[0,1,2,4,5,6,7,8,9,11],seed:0,self:[0,2,6,7,11],send:11,sequenc:[0,8],sequenti:11,seriali:9,serializ:[2,9,11],server:2,set:[0,2,4,5,6,7,9,10],set_amp_arg:9,set_checkpoint:9,set_classy_st:[2,4,5,6,7,9],set_dataset:9,set_distributed_opt:9,set_head:6,set_hook:9,set_loss:9,set_met:9,set_model:9,set_model_st:2,set_num_epoch:9,set_optim:9,set_param_schedul:7,set_test_onli:9,set_test_phase_period:9,setup:[0,2],sever:11,sgd:7,shape:[5,6],share:[2,6,10],ship:11,should:[0,2,4,5,6,7,8,9,10,11],show:2,shuffl:[0,9],shuffle_se:0,siames:6,sigmoid:[1,4],signatur:[0,2,6,11],significantli:2,silent:6,similar:0,simpl:4,simplest:7,sinc:[0,2,5,6],singl:[0,4,5,7,10],situat:0,size:[0,1,2,6,11],size_averag:4,skip:[0,6],skip_transformation_typ:6,slower:2,small:0,small_input:6,smooth:4,smooth_target:4,smoothing_param:4,soft:4,soft_target_cross_entropy_loss:4,softmax:[1,4],softtargetcrossentropyloss:4,some:6,sourc:0,spatial:[6,11],spawn:[9,10],special:6,specif:[6,8,9],specifi:[0,2,4,6,7,8,11],speed:9,split:[0,11],splits_dir:0,squeez:6,squeezeandexcitationlay:6,stabl:7,stage:6,stage_plan:6,stage_spatial_strid:6,stage_temporal_kernel_basi:6,stage_temporal_strid:6,stand:8,standard:[6,11],start:[2,8,9],start_valu:8,stat:5,state:[2,4,5,6,7,9],state_dict:[2,4,5,6,7,9],stateless:4,std:11,stem:6,stem_maxpool:6,stem_nam:6,stem_plan:6,stem_spatial_kernel:6,stem_temporal_kernel:6,step:[0,2,7,8,9],step_between_clip:0,step_schedul:8,step_with_fixed_gamma_schedul:8,stepparamschedul:8,stepwithfixedgammaparamschedul:8,stop:9,stopiter:0,store:[0,2],str:[0,1,2,4,5,6,7,8,9,10,11],stream:0,stride:6,string:[0,9],structur:[0,6],style:[9,11],subclass:[0,1,2,4,5,6,7,8,9,11],subsampl:0,subtract:11,successsfulli:0,suffix:2,sum:[4,8],sum_arbitrary_loss:4,sumarbitraryloss:4,summary_writ:2,summarywrit:2,suppli:11,support:[2,4,6,7,11],sync:5,sync_stat:5,synchron:9,synthet:0,syntheticimagedataset:0,syntheticimagestreamingdataset:0,syntheticvideodataset:0,system:[6,11],take:[0,4,6,8,11],taken:11,target:[0,4,5,11],target_is_one_hot:5,target_shap:5,task:[2,3,5,7,10,11],tb_writer:2,team1:6,team2:6,team:6,tell:9,tempor:6,temporal_conv_1x1:6,tensor:[4,5,6,7,9,11],tensorboard:2,tensorboard_plot_hook:2,tensorboardplothook:2,tensorboardx:2,tensorflow:2,term:[2,7],test:[0,1,2,5,6,9,11],test_onli:9,test_phase_period:9,than:[1,8],thei:[0,2,6,7],them:[1,6,7,11],thi:[0,1,2,3,4,5,6,7,8,9,11],thin:6,thing:11,third:11,those:[0,2],thread:[5,10],three:0,through:[6,11],thu:0,tied:[6,9],ties:5,time:[0,2,5,6,8],timestamp:0,titl:2,title_suffix:2,togeth:3,tool:2,top:[0,5],topk:5,torch:[0,1,2,4,5,6,7,9,11],torchscript:6,torchvis:[0,11],total:[8,9],track:2,train:[0,1,2,4,5,6,7,8,9,10,11],train_phase_idx:9,train_step:[7,9],trainabl:6,trainer:[3,9],tranform:[0,11],transfer:1,transform:[0,3,6],transform_config:[0,11],transforms_config:11,transit:6,trick:11,trim:0,trunk:6,trunk_output:6,trunk_stat:6,truth:5,tune:6,tupl:[0,2,5,6,7,11],tupletomaptransform:11,tutori:3,two:[0,2,6,11],type:[0,2,6,8,9,11],ucf101:0,ucf101dataset:0,under:6,undergo:11,underli:[0,6,7],uniform:0,union:[0,6,7,8,9,11],uniqu:1,unique_id:1,unlik:0,unregular:7,unregularized_param:6,unsync:5,unwrap:9,updat:[2,5,6,7,8,9,11],update_file_path:0,update_interv:8,update_schedule_on_epoch:7,update_schedule_on_step:7,updateinterv:8,upper:8,usag:[2,9],use:[0,1,2,4,5,6,7,8,9,10,11],use_batchnorm:6,use_dropout:1,use_ema:2,use_gpu:[9,10],use_larc:7,use_s:6,use_shuffl:0,used:[0,1,2,3,4,5,6,7,8,9,10,11],useful:[0,2,6,7,11],user:[0,6,11],uses:0,using:[2,5,6,7,9,10],util:[0,1,9],valid:[0,4,5],valid_target:4,valu:[0,2,4,5,6,8,9,11],variabl:[0,9],variou:5,vector:[4,11],veri:[4,11],via:[0,5,6],video:[0,5,6,11],video_accuracy_met:5,video_clip:0,video_dir:0,video_height:0,video_min_dimens:0,video_util:0,video_width:0,videoaccuracymet:5,videoclip:0,visdom:2,visdomhook:2,vision:[0,1,2,4,5,6,7,8,9,11],visual:2,wai:7,want:[2,6,10],warmup:8,warn:9,weight:[2,4,6,7],weight_decai:[6,7],well:0,were:8,what:[0,1,2,4,5,6,7,8,9,10,11],when:[0,1,6],where:[0,4,5,6,7,8,9],whether:[0,1,2,9,10],which:[0,1,2,4,5,6,7,8,9,11],whose:11,width:0,width_per_group:6,within:[1,6],without:[1,4,8,11],work:11,worker:9,world:0,would:[6,8],wrap:[0,6,7,9],wrap_around:0,wrapper:[0,6,9,11],wrapper_cl:6,write:2,www:2,yet:4,you:[6,9,10,11],your:[6,10],zero:6,zero_grad:7,zero_init_bia:1,zero_init_bn_residu:6,zero_init_residual_transform:6},titles:["Dataset","Heads","Hooks","Classy Vision\u2019s API Reference","Losses","Meters","Models","Optimizers","Param Schedulers","Tasks","Trainer","Transforms"],titleterms:{api:3,classi:3,dataset:0,head:1,hook:2,indic:3,loss:4,meter:5,model:6,optim:7,param:8,refer:3,schedul:8,tabl:3,task:9,trainer:10,transform:11,vision:3}})