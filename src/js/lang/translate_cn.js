var translate_cn = {
	header_wellcome : '恒星，分布式的全球支付网络',
	login_desc : '本钱包使用秘钥来登录已有的账户。你的秘钥加密保存在了你的电脑里，所以账户像你的个人电脑一样安全。请务必做好密钥的备份。',
	open_account : '打开账户',
	select_file : '选择账户文件',
	create_new_account : '创建新账户',
	account_password : '账户密码',
	open_existed_account : '打开已有账户',
	create_blank : '创建一个全新账户',
	create_by_secret : '用秘钥创建',
	encrypt_new_file : '加密你的新账户文件',
	wallet_file : '账户文件',
	password : '密码',
	pwd_weak : '强度太低，密码最好包含字母、数字和特殊符号。',
	password_confirm : '确认密码',
	pwd_not_match : '密码不一致',
	encrypt_account : '加密账户',
	cancel : '取消',
	create_secret : '用秘钥创建帐户',
	enter_secret : '请输入秘钥',
	invalid_account: '账号是无效的',
	invalid_secret : '秘钥是无效的',
	important : '重要信息：',
	security_notice : '下方的秘钥让你可以在丢失密码的小概率事件中拿回你的钱。任何拥有该秘钥的人都可以取出你的钱。所以务必将它保管在安全的地方。',
	show_password : '显示',
	hide_password : '隐藏',
	stellar_address : '恒星地址',
	secret_key : '秘钥和二维码:',
	show_secret: '显示秘钥',
	hide_secret: '隐藏秘钥',
	are_you_sure: '你在一个安全的地方？没有人或摄相头在看你吧？',
	save_safe: '你把密钥保存在安全的地方了吗？',
	yes_save: '是，我已经保存好了！',

	/** Balance & Trust **/
	balance : '余额',
	estimated : '资产折合：',
	reserve   : '冻结：',
	total : '总量',
	trust : '授信',
	asset : '资产',
	trust_limit : '授信额度',
	add_trust : '对社区锚点进行授信',
	trust_src : '授信后才能充值或接收他人的转账。',
	trust_note: '警告: 列表来源于恒星社区，我们不对任何锚点进行背书。请为自己的授信行为负责。',
	trust_remove : '删除授信',
	trust_remove_desc : '当余额为零时可以删除授信',
	trust_removeing : '正在删除……',
	trust_add : '授信',
	fed_add : '通过联邦协议授信',
	fed_desc: '输入支持联邦协议的域名，你就能进行授信。',
	fed_url : '联邦协议 URL',
	fed_unable : '无法找到资产',
	fed_loading: '正在解析资产',
	manual_add : '手动授信',
	manual_desc: '在了解发行方账号和资产代码的情况下，你可以手动进行授信操作。',
	issuer_invalid : '发行方账号必须是有效的恒星地址编码。',
	memo_invaid    : '备注必须是有效的。',
	trust_granted  : '设置信任额度成功！',

	/** send **/
	send : '发送',
	send_pick : '选择要发送的资产',
	send_desc : '目前我们只支持资产间的直接发送。',
	send_note : '注意：接受者必须也授信过同样的资产。',
	recipient : '接受者',
	memo: '备注',
	invalid_domain : '域名无响应',
	account_loading: '正在解析账号',
	select_asset : '请先选择要发送的资产。',
	sending_to   : '正在发送到',
	send_done    : '发送成功',
	not_funded   : '未激活。请发送至少1个XLM创建该账号。最好发3个。',
	can_accept   : '账号可接收',

	/** Convert **/
	convert       : '兑换',
	convert_title : '把一种货币转换成另一种',
	convert_input : '请输入兑换的具体信息。',
	convert_nopath: '没有合适的兑换路径。可能是账号的资金不足。',
	receive       : '接收',
	calculating   : '计算中',
	path          : '路径：',

	/** History **/
	history: '历史',
	payments: '转账',
	effects: '变动',
	trades: '所有操作',
	latest_payments : '最近的收付记录',
	latest_effects : '最近的账户变动',
	latest_trades : '最近的所有操作',
	you         : '你',
	account_id  : '账号',
	operation   : '操作',
	loading     : '载入中...',
	load_more   : '载入更多',
	no_more     : '没有更多的交易了',
	set_options : '设置',
	set_data    : '数据',

	choose : '选择',
	example : '示例',
	refresh : '刷新',
	asset_code : '资产代码',
	issuer_id : '发行方账号',
	amount : '金额',
	optional : '选填',
	required : '必填',
	require_memo : '接收方需要Memo，请确保备注正确！',

	/** Trade **/
	trade : '交易',
	normal: '标准',
	sent  : '发送',
	received : '接收',
	created : '创建',
	offer : '买卖',
	offer_cancel    : '撤单',
	offer_canceling : '撤单中...',
	price : '价格',
	buy   : '买',
	sell  : '卖',
	orderbook : '委托单',
	buy_offers : '买单',
	sell_offers: '卖单',
	depth : '深度',
	manager_offer : '管理委托',
	your_buy_offers  : '我的买单',
	your_sell_offers : '我的卖单',
	you_have      : '你拥有',
	order_amount  : '数量',
	price_of_each : '单价',
	order_value   : '委托总额',
	offer_success : '下单成功',
	trade_pick : '选择交易资产',
	as_base    : '选作基础货币',
	as_counter : '选作对手方货币',
	base_asset    : '基础货币',
	counter_asset : '对手方货币',
	pick_book  : '为了交易其他资产，你可以选择',
	trade_pair : '交易对',
	pick_trade : '回到',
	trade_page : '交易页面',
	advanced   : '高级',
	buying     : '买入',
	selling    : '卖出',

	/** ICO **/
	ico : '衍生项目',
	ico_stellar : '恒星的衍生项目',
	ico_note: '警告：在参与项目之前，你需要仔细考虑项目所涉及的风险。你的资金可能完全损失。项目来自源于社区，我们不为任何项目背书。',
	ico_instruction: '授信衍生项目的资产后，选择“交易 - 兑换”，即可用你所拥有的资产参与。',

	/** Setting & security **/
	settings : '设置',
	network  : '网络',
	proxy    : '代理',
	switch_net      : '恒星网络',
	switch_net_desc : '测试网络仅用于开发、测试和研究。钱包大部分功能只适用于公共网络。如非专业人员，请勿切换成测试网络。',
	public_net : '公共网络',
	test_net   : '测试网络',
	other_net  : '自定义',
	public_url : '恒星公网节点',
	test_url   : '测试网络节点',
	other_url  : '网络节点',
	passphrase : '网络标识',
	fed_protocol: '联邦协议',
	fed_network : '名称服务（~）',
	fed_network_desc : '你可以用“~名字”来代替“名字*联邦.域名”。',
	you_name_is : '你的名称是',
	fed_ripple  : '瑞波服务',
	fed_ripple_desc : '当你输入Ripple地址时，将自动用以下域名进行解析。',
	fed_bitcoin  : '比特币服务',
	fed_bitcoin_desc : '当你输入Bitcoin地址时，将自动用以下域名进行解析。',
	save     : '保存',
	security : '安全',
	inflation : '通胀地址',
	inflation_desc : '恒星币每年通胀率为1%。当通胀地址得到的票数超过0.05%的总量时，就能从每周的分发中得到利息。1万个XLM每周约得到2个XLM。',
	inflation_done : '通胀地址设置成功',
	inflation_options      : '社区通胀池',
	inflation_options_desc : '你可以加入以下通胀池来得到每周的利息，不同的池子可能会收不同的手续费。',
	inflation_xlmpool  : '加入xlmpool通胀池',
	inflation_lumenaut : '加入lumenaut通胀池',
	inflation_moonpool : '加入MoonPool通胀池',
    inflation_donation : '支持我们',
    inflation_donation_desc : '我们不请求捐助，但我们希望你能投票支持我们。',
	inflation_fox  : '投票给瑞狐',
	
	
	home_domain : '域名',
	domain_desc : '账号可设置一个域名。在某些场景下，可通过域名取得更多的帮助信息。',
	domain_done : '域名设置成功',
	manage_data : '数据',
	data_desc1  : '你可以给账号设置任意多的数据项（名称和值），每个数据项都会冻结相应的流明币XLM。',
	data_desc2  : '数据项可用于各种应用，恒星核心协议并不直接使用它们。',
	data_key    : '名称',
	data_value  : '值',
	data_done   : '数据项设置成功',
	delete_account : '删除账户',
	merge_desc     : '危险！此操作将你持有的XLM转移到目标账户，你的账户将从账本中删除！',
	dest_account   : '目标账户',
	delete_warning : '我明白所有风险 >>',
	back           : '返回',
	merge_done     : '你的账户已经被合并到了目标账户。',

	/** Deposit & withdrawl **/
	deposit_withdraw : '充提',
	deposit  : '充值',
	withdraw : '提现',
	dw_coin  : '充值和提现',
	dw_desc_line1 : '如果你要充值或提现法币和其他链上的币，你需要挑选一个锚点服务商。',
	dw_desc_line2 : '你可以从下面的下拉框里选择一个锚点。它们是我们从社区挑选并实现了加强版联邦协议的锚点。',
	anchor   : '锚点',
	no_trust : '请先授信此资产',
	alipay   : '支付宝',
	bank_card : '银行卡',
	fill_form : '请先完整地填写表单。',
	analyzing : '正在解析……',
	will_recv : '对方将收到',
	can_send  : '你可以发送',

	Stellar : '恒星',
	stellar_desktop_client : '恒星桌面钱包',
	app_open_source  : '钱包开源啦！',
	app_safe_notice  : '密钥保存在本地，一定要记得备份，备份，备份！自己的安全自己负责。',
	app_feedback     : '有修改建议请到社区QQ群676552869里讨论。',
	trade_volume : '24小时交易量',
	wallet : '钱包',
	version: '版本',
	logout : '注销',

	/** Error **/
	NotFoundError : '恒星网络未找到该账号，请先激活此账号。激活需要至少1 XLM。每个授信和委托单需要额外冻结0.5 XLM，建议至少用3 XLM完成激活。',
	changeTrustLowReserve : '恒星资金不足，无法授信新资产。每个授信需要额外冻结0.5 XLM。'
}
