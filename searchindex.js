Search.setIndex({docnames:["advanced","distributions","getting_started","index","inference","installation","nn","optimization","parameters","poutine","primitive_dist","primitives","transformed_dist"],envversion:52,filenames:["advanced.rst","distributions.rst","getting_started.rst","index.rst","inference.rst","installation.rst","nn.rst","optimization.rst","parameters.rst","poutine.rst","primitive_dist.rst","primitives.rst","transformed_dist.rst"],objects:{"pyro.__init__":{device:[11,1,1,""],get_param_store:[11,1,1,""],map_data:[11,1,1,""],module:[11,1,1,""],module_from_param_name:[11,1,1,""],module_name:[11,1,1,""],observe:[11,1,1,""],param:[11,1,1,""],sample:[11,1,1,""],set_cpu:[11,1,1,""],set_cuda:[11,1,1,""],sync_module:[11,1,1,""],user_param_name:[11,1,1,""]},"pyro.distributions":{bernoulli:[10,0,0,"-"],beta:[10,0,0,"-"],categorical:[10,0,0,"-"],delta:[10,0,0,"-"],distribution:[10,0,0,"-"],exponential:[10,0,0,"-"],gamma:[10,0,0,"-"],log_normal:[10,0,0,"-"],multinomial:[10,0,0,"-"],normal:[10,0,0,"-"],poisson:[10,0,0,"-"],uniform:[10,0,0,"-"]},"pyro.distributions.bernoulli":{Bernoulli:[10,2,1,""]},"pyro.distributions.bernoulli.Bernoulli":{batch_log_pdf:[10,3,1,""],log_pdf:[10,3,1,""],sample:[10,3,1,""],support:[10,3,1,""]},"pyro.distributions.beta":{Beta:[10,2,1,""],log_gamma:[10,1,1,""]},"pyro.distributions.beta.Beta":{batch_log_pdf:[10,3,1,""],log_pdf:[10,3,1,""],sample:[10,3,1,""]},"pyro.distributions.categorical":{Categorical:[10,2,1,""]},"pyro.distributions.categorical.Categorical":{batch_log_pdf:[10,3,1,""],log_pdf:[10,3,1,""],sample:[10,3,1,""],support:[10,3,1,""]},"pyro.distributions.delta":{Delta:[10,2,1,""]},"pyro.distributions.delta.Delta":{batch_log_pdf:[10,3,1,""],log_pdf:[10,3,1,""],sample:[10,3,1,""],support:[10,3,1,""]},"pyro.distributions.distribution":{Distribution:[10,2,1,""]},"pyro.distributions.distribution.Distribution":{log_pdf:[10,3,1,""],sample:[10,3,1,""],support:[10,3,1,""]},"pyro.distributions.exponential":{Exponential:[10,2,1,""]},"pyro.distributions.exponential.Exponential":{batch_log_pdf:[10,3,1,""],log_pdf:[10,3,1,""],sample:[10,3,1,""],support:[10,3,1,""]},"pyro.distributions.gamma":{Gamma:[10,2,1,""],log_gamma:[10,1,1,""]},"pyro.distributions.gamma.Gamma":{batch_log_pdf:[10,3,1,""],log_pdf:[10,3,1,""],sample:[10,3,1,""],support:[10,3,1,""]},"pyro.distributions.log_normal":{LogNormal:[10,2,1,""]},"pyro.distributions.log_normal.LogNormal":{batch_log_pdf:[10,3,1,""],log_pdf:[10,3,1,""],sample:[10,3,1,""],support:[10,3,1,""]},"pyro.distributions.multinomial":{Multinomial:[10,2,1,""]},"pyro.distributions.multinomial.Multinomial":{batch_log_pdf:[10,3,1,""],expanded_sample:[10,3,1,""],log_pdf:[10,3,1,""],sample:[10,3,1,""]},"pyro.distributions.normal":{Normal:[10,2,1,""]},"pyro.distributions.normal.Normal":{batch_log_pdf:[10,3,1,""],do_cholesky:[10,3,1,""],log_pdf:[10,3,1,""],sample:[10,3,1,""],support:[10,3,1,""]},"pyro.distributions.poisson":{Poisson:[10,2,1,""],log_gamma:[10,1,1,""]},"pyro.distributions.poisson.Poisson":{batch_log_pdf:[10,3,1,""],log_pdf:[10,3,1,""],sample:[10,3,1,""],support:[10,3,1,""]},"pyro.distributions.transformed_distribution":{Bijector:[12,2,1,""],TransformedDistribution:[12,2,1,""]},"pyro.distributions.transformed_distribution.Bijector":{inverse:[12,3,1,""],log_det_jacobian:[12,3,1,""]},"pyro.distributions.transformed_distribution.TransformedDistribution":{batch_log_pdf:[12,3,1,""],log_pdf:[12,3,1,""],sample:[12,3,1,""]},"pyro.distributions.uniform":{Uniform:[10,2,1,""]},"pyro.distributions.uniform.Uniform":{batch_log_pdf:[10,3,1,""],log_pdf:[10,3,1,""],sample:[10,3,1,""],support:[10,3,1,""]},"pyro.infer":{importance:[4,0,0,"-"]},"pyro.infer.importance":{Importance:[4,2,1,""]},"pyro.infer.importance.Importance":{runner:[4,3,1,""]},"pyro.optim":{optim:[7,0,0,"-"]},"pyro.optim.optim":{PyroOptim:[7,2,1,""]},"pyro.optim.optim.PyroOptim":{get_optim_args:[7,3,1,""]},"pyro.params":{param_store:[8,0,0,"-"]},"pyro.params.param_store":{ParamStoreDict:[8,2,1,""]},"pyro.params.param_store.ParamStoreDict":{clear:[8,3,1,""],get_param:[8,3,1,""],load:[8,3,1,""],param_name:[8,3,1,""],save:[8,3,1,""]},"pyro.poutine":{block_poutine:[9,0,0,"-"],poutine:[9,0,0,"-"],replay_poutine:[9,0,0,"-"],trace:[9,0,0,"-"],trace_poutine:[9,0,0,"-"]},"pyro.poutine.block_poutine":{BlockPoutine:[9,2,1,""]},"pyro.poutine.poutine":{Poutine:[9,2,1,""]},"pyro.poutine.replay_poutine":{ReplayPoutine:[9,2,1,""]},"pyro.poutine.trace":{Trace:[9,2,1,""],get_parents:[9,1,1,""]},"pyro.poutine.trace.Trace":{add_args:[9,3,1,""],add_map_data:[9,3,1,""],add_observe:[9,3,1,""],add_param:[9,3,1,""],add_return:[9,3,1,""],add_sample:[9,3,1,""],batch_log_pdf:[9,3,1,""],copy:[9,3,1,""],log_pdf:[9,3,1,""]},"pyro.poutine.trace_poutine":{TracePoutine:[9,2,1,""]},pyro:{__init__:[11,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method"},terms:{"abstract":[0,10],"case":4,"class":[4,7,8,9,10,12],"default":9,"function":[0,9],"import":3,"new":[0,4],"return":[8,9],"short":0,"true":[9,10],The:[0,6,7],abstract_inf:4,abstractinf:4,adabl:10,add_arg:9,add_map_data:9,add_observ:9,add_param:9,add_return:9,add_sampl:9,advanc:3,algorithm:[0,4,7,9],all:[0,9],along:9,alpha:10,also:[7,9],ani:7,api:9,appli:0,approxim:4,arbitrari:10,arg:[4,9,10,11,12],args_and_kwarg:9,argument:9,around:8,autoregressivenn:3,base:[4,7,8,9,10,12],base_distribut:12,basic:[2,8,9],batch:10,batch_log_pdf:[9,10,12],batch_siz:[10,12],behavior:9,being:4,beneath:0,bernoulli:1,beta:1,bijector:1,bleed:5,block:9,blockpoutin:0,branch:5,built:0,call:[4,9],can:9,carri:8,categor:1,cauchi:1,central:8,clear:8,clippedadam:3,clone:5,com:5,compos:0,comput:[4,9],concept:2,conditionpoutin:0,content:[1,3],context:[4,6],control:4,copi:[9,10],core:[0,6],coroutin:[0,3],covari:10,creat:0,custom:7,data:[9,11],deep:6,delta:1,detail:5,devic:11,diagon:10,dict:9,dirti:10,discuss:7,distribut:[3,4],distributino:10,dive:2,do_choleski:10,doc:[4,9],dynam:[7,9],edg:5,elbo:3,enum_discret:5,escapepoutin:0,estim:8,everi:9,exampl:2,execut:9,exist:9,expanded_sampl:10,exponenti:1,expos:9,expose_al:9,expose_typ:9,extens:4,fals:9,famili:8,featur:[3,5],filenam:8,first:10,flexibl:0,found:7,from:[3,8,9,10,12],futur:4,gamma:1,gener:7,get:[3,9],get_optim_arg:7,get_par:9,get_param:8,get_param_stor:11,git:5,github:5,global:8,graph:9,guid:[4,8],guide_trac:9,hack:10,halfcauchi:1,has:[0,4],here:[4,7],hide:9,hide_al:9,hide_typ:9,http:5,implement:[4,6,9,10],implicit:9,index:3,infer:[0,2,3,8,9],inform:9,init_tensor:8,input:9,instal:[2,3],instruct:5,interact:8,invers:12,inverseautoregressiveflow:1,involv:4,its:10,jacobian:12,kwarg:[4,9,10,11,12],lam:10,lambdapoutin:0,languag:6,latent:4,learn:[2,4],librari:0,liftpoutin:0,likelihood:10,load:8,local:9,log:[9,10],log_det_jacobian:12,log_gamma:10,log_pdf:[9,10,12],logdet:12,lognorm:1,look:4,loop:4,main:4,make:9,manag:7,map_data:[9,11],master:5,matrix:10,mean:10,method:[10,12],model:[2,4,8],modul:[6,7,11,12],module_from_param_nam:11,module_nam:11,more:4,most:4,multi:10,multinomail:10,multinomi:1,multipl:4,name:[8,9,11],need:10,network:3,neural:3,nn_obj:11,node:9,none:[6,8,9,10],normal:1,num:10,num_sampl:4,object:[7,8,9,10],obs:[9,11],observ:[9,11],one_hot:10,optim:[3,4],optim_arg:7,optim_constructor:7,order:10,other:2,output:9,overal:9,page:3,param:[7,8,9,10,11],param_nam:[8,11],paramet:[3,7],parameter:[4,8,10],paramstor:3,paramstoredict:8,parent:9,part:[6,7],particular:7,pass:12,pip:5,plai:8,point:8,poisson:1,pop:9,posterior:4,poutin:[0,3],ppl:5,primari:8,primit:[0,1,3,8,9],probabilist:[0,4,6],probabl:[9,10],program:[0,6,9],proper:4,provid:[6,7],push:9,pyro:[0,2,4,5,6,7,8,10,12],pyro_nam:11,pyrooptim:3,python:5,pytorch:[5,7,8,10],quick:10,random:4,realli:6,recent:5,recommend:5,record:9,reparameter:10,reparameteriz:10,reparametr:10,replac:10,replai:9,replaypoutin:0,repres:8,requir:5,role:8,run:5,runner:4,sampl:[4,9,10,11,12],sampler:10,sane:9,save:8,score:10,search:3,see:[5,7],set_cpu:11,set_cuda:11,setup:5,should:9,sigma:10,site:9,some:[4,5,9],sort:4,sourc:3,special:10,stack:9,start:3,state:8,std:10,stochast:[0,4,8],store:[8,9],structur:9,suffici:9,support:[4,5,7,10],svi:[3,7],sync_modul:11,tensor:10,thei:8,them:9,theori:9,thi:[4,9],thin:8,thing:9,through:12,todo:[4,9],torch:12,trace:0,tracepoutin:0,transform:[1,3],transformeddistribut:1,transpar:9,trial:10,tutori:[2,7],typic:8,uber:5,uni:10,uniform:1,uniqu:8,univari:10,use:9,used:[7,8],useful:6,user:8,user_param_nam:11,using:5,usual:4,val:9,valu:9,variabl:[4,8,9],variat:[4,8,10],veri:5,version:[4,5,10],via:8,virtual:[10,12],visual:9,warn:10,webppl:10,where:[4,8,10],which:7,work:0,wrap:[7,9],wrapper:8},titles:["Advanced Features","Distributions","Getting Started","Pyro Documentation","Inference","Installation","Neural Network","Optimization","Parameters","Poutines (Pyro Coroutines)","Primitive Distributions","Primitives","Transformed Distribution"],titleterms:{"import":4,advanc:0,autoregressivenn:6,bernoulli:10,beta:10,bijector:12,blockpoutin:9,categor:10,cauchi:10,clippedadam:7,conditionpoutin:9,coroutin:9,delta:10,distribut:[1,10,12],document:3,elbo:4,escapepoutin:9,exponenti:10,featur:0,from:5,gamma:10,get:2,halfcauchi:10,indic:3,infer:4,instal:5,inverseautoregressiveflow:12,lambdapoutin:9,liftpoutin:9,lognorm:10,multinomi:10,network:6,neural:6,normal:10,optim:7,paramet:8,paramstor:8,poisson:10,poutin:9,primit:[10,11],pyro:[3,9],pyrooptim:7,replaypoutin:9,search:4,sourc:5,start:2,svi:4,tabl:3,trace:9,tracepoutin:9,transform:12,transformeddistribut:12,uniform:10}})